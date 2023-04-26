const { defineConfig } = require("cypress");
const mysql = require("mysql")
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

module.exports = defineConfig({

  // env: {
  //  //  baseUrl: 'https://intranet.joshsoftware.com/',
  //   db:{
  //     host:"https://localhost:3307",
  //     user: "root",
  //     password:"example",
  //     database:"test"
  //   },
  "env":{
    "db": {
      "host": "127.0.0.1",
      "user": "root",
      "password": "example",
      "database": "test",
      "port": 3307,
      //"key": "cypress/pemFiles/testPemFile.pem",
      //"http": true
    },
    async setupNodeEvents(on, config) {
      // implement node event listeners here

        const bundler = createBundler({
          plugins: [createEsbuildPlugin(config)],
        });

        on("file:preprocessor", bundler);
        await addCucumberPreprocessorPlugin(on, config);
      
        on("task", {
          queryDb: query => {
            return queryTestDb(query, config);
          }
        });

        return config;
      
      },
    
        
   },
  reporter: 'cypress-mochawesome-reporter',//for HTML reports
  e2e: {
    
    
    
    setupNodeEvents(on, config) {
      on("task", {
        queryDb: query => {
          return queryTestDb(query, config);
        }
      });
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://intranet.joshsoftware.com/',
    chromeWebSecurity: false,
    //experimentalModifyObstructiveThirdPartyCode: true,
   // experimentalSessionAndOrigin: true,
    pageLoadTimeout:120000,
    testIsolation: false,
    //baseUrl: "https://intranet.joshsoftware.com/",
 
  },
});
