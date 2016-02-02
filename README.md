# Foundation-Angular Example

[Foundation](http://foundation.zurb.com/) now comes with a version to be used for [apps](http://foundation.zurb.com/apps.html). This example just takes the library and plays around with the Foundation [components](http://foundation.zurb.com/apps/docs/) and the Angular functionality it has. 

You need to have [npm](https://www.npmjs.com/) installed your computer so the files can be served through a node web server. You will also need [gulp](http://gulpjs.com/) and [bower](http://bower.io/) installed.

To start the app, you need to switch to the ExampleApp directory. From there run

    npm start

If you're using Mac (I still have to test this on Windows), it will automatically open the browser to the correct address and port [http://localhost:8079/](http://localhost:8079/). 

This example shows you how to divide your logic and services within files for each feature, i.e. a directory controllers for all of your controllers and a directory services for your controllers.

## Directory Layout

```
ExampleApp/             --> all of the source files for the application
  bower_components/     	--> dependencies installed when bower install was ran	
  build/     			--> application files that can be deployed to production
  
  client/               --> development files we shall be using
  	assets/
  		js/						--> js assets we shall use in our app
    		controllers/			--> controller files
    		services/				--> service files
    templates/			--> HTML files for the views
    index.html			--> HTML file to be loaded initially on the web
    	
  etc/                  --> configuration
  node_modules/         --> node files to serve our files when we are developing
  bower.json            --> js dependencies to be installed
  gulpfile.js           --> App configuration and includes
```
When adding an additional file, be it a controller or a service, you will need to add the files into the gulpfile.js appJS array, e.g. if you were to add a new controller for your home page, you would have your gulpfile like:

	.
	.
	.
	appJS: [
    	'client/assets/js/app.js',
    	'client/assets/js/controllers/home.js'
    
  	]
  	.
  	.
  	.

This will concatenate the contents of your home.js file to the final app.js served. 

On the view, you will also have to instruct it which controller it will use, e.g.

**/client/templates/home.html**

	---
	name: home
	url: /
	controller: HomeController
	---
	.
	.
	.

In this example, the HomeController is inside the application.home module, which will have to be loaded on the app.js like this:

**/client/assets/js/app.js**

	.
	.
	.
	angular.module('application', [
    	'ui.router',
    	'ngAnimate',
    	'application.home',
    .
    .
    .

Every time you start the server with npm start, the application gets built on the build directory. If you wish just to build the application, just run:

	gulp build --production
	    
**Note**:
Sometimes the server behaves uncannily. You may need to restart it. 