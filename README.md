# Crossover App

This project is the application requested by Crossover as a step in their recluting process.

The app contains one single controller and a variety of elements displayed in a list of items.


## Installation process

The zip file already contains all the libraries and plugins needed to run this project.
All you need to do is locate the "crossover" folder under your htdocs/ folder (if you're using Mamp or Xampp)
or directly under your www/ folder if you have native apache installed.

Now browse to the app at `http://localhost/crossover/app/index.html`

In case you don't have any local server installed you can use "npm" to run the project directly.
For this case, you need to install node.js to run the project. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

Then, run the following command on the root of project (crossover/)

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`


### Test

This project contains several unit tests (using Jasmine and Karma) and end-to-end tests (using Protractor).
In order to run the tests you need to install node.js and its package manager (npm) (Instructions above).

To run the unit tests run the following command:
```
npm test
```

This will install all the necessary packages (all already installed in the project)
and will run the unit tests using Jasmine and Karma.

To run the end-to-end tests we need to set the base url for our project in the file "e2e-tests/protractor-conf.js".
In case you ran the project using Apache (Xampp or MAMP) you need to comment line 12 (the baseUrl used in node.js)
and uncomment line 13 (the baseUrl used in Apache) as the following mode:

```
//baseUrl: 'http://localhost:8000/app/'
baseUrl: 'http://localhost/crossover/app/'
```
Otherwise, if you're running the project using node.js, leave it as it is.

Now, since Protractor is built upon WebDriver we need to install this.
The project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Now, that the project is up (either on Apache or node.js), we can run the following command:

```
npm run protractor
```

This will install all the neccesary packages (all already installed in the project)
and will start the test process using selenium.

### Extras

In order to make changes in the app, we need to consider 2 points:

**Sass compression:**
We use sass to write our custom styles, in order to apply the style changes in the project
you need to run:
```
gulp sass
```
This will recompress the scss files and apply the new changes.

**$templateCache for testing:**
We use $templateCache to stave off the use of GET requests within Jasmine.
So after every change in the templates, we need to run the following command to re-cache the new changes:
```
gulp html2
```
This will re-cache the templates for their use in the unit tests. (This isn't require for the app in angular)