# Mail Man

HTML EMail development with templating, because time costs.

## Pre requistes

* Node JSs
* prepare to work with
```bash
$ npm install && npm install nodemon -g && npm start
```

The files;

	* data/client-name.json
	* views/client-name.html
	* styles/sass/client-name.scss

Will be bundled together with inline style, and produce HTML at dist/client-name.html

You can work on the tamplate and view at concurrently at http://localhost:3000/mail/client-name.

All compilation is done on request, and a file change will totally restart the server