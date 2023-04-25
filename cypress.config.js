const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // env: {
  //   baseUrl: 'https://intranet.joshsoftware.com/',
   
  // },
  reporter: 'cypress-mochawesome-reporter',//for HTML reports
  e2e: {
    setupNodeEvents(on, config) {
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
