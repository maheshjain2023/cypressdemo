const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // env: {
  //   baseUrl: 'https://intranet.joshsoftware.com/',
   
  // },

  e2e: {
    baseUrl: 'https://intranet.joshsoftware.com/',
    chromeWebSecurity: false,
    //experimentalModifyObstructiveThirdPartyCode: true,
   // experimentalSessionAndOrigin: true,
    pageLoadTimeout:120000,
    testIsolation: false,
    //baseUrl: "https://intranet.joshsoftware.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here


    },
  },
});
