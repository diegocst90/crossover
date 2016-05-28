exports.config = {
  allScriptsTimeout: 50000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/app/', //baseUrl for the case when we run the project using: "npm start"
  //baseUrl: 'http://localhost/crossover/app/', //baseUrl for the case when we run the app using apache (Xampp or Mamp)

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
