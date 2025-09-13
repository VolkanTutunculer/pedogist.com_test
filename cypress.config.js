// cypress.config.js
const { defineConfig } = require("cypress");
const registerCypressGrep = require('@cypress/grep/src/plugin');
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,

  env: {
    APP_USERNAME: process.env.APP_USERNAME,
    APP_PASSWORD: process.env.APP_PASSWORD
  },

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: 'https://www.pedogist.com/',
    defaultCommandTimeout: 20000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      registerCypressGrep(on, config);
      
      return config;
    },
  },
});