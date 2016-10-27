var express = require('express'),
    app = express(),
    swig = require('swig'),
    fs = require('fs'),
    juice = require('juice'),
    sass = require('node-sass'),
    server;

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);

app.use(express.static('assets'));


app.get('/', function (req, res) {
    res.render('index', {
        data: 'test!!!!!!'
    });
});

app.get('/mail/:client', function (req, res) {

    fs.readFile('data/'+req.params.client+'.json', 'utf8', function (err, data) {
        if (err) throw err; // we'll not consider error handling for now
        var obj = JSON.parse(data);
        var compileOptions = {removeStyleTags:false}
        console.log(req.params.client);
        sass.render({ file: 'styles/sass/'+req.params.client+'.scss' }, function(err, result) {
            obj.style = result.css;
            obj.assetDir = 'http://storage.googleapis.com/cdn-email-assets'; //'/'+req.params.client;
            res.render(req.params.client, obj);

            var template = swig.compileFile("views/"+req.params.client+".html")
            var templateHTML = template(obj);
            juicedHtml = juice(templateHTML, compileOptions);
            //console.log(juicedHtml);


            fs.writeFile("dist/"+req.params.client+".html", juicedHtml, function(err) {
                if(err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });



        });
    });
});

server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('ExpressApp listening at http://%s:%s', host, port);

});