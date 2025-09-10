// cypress.config.js
const { defineConfig } = require("cypress");
const registerCypressGrep = require('@cypress/grep');

module.exports = defineConfig({
  // Genel proje ayarları
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,

  // Ortam değişkenleri
  env: {
    APP_USERNAME: process.env.APP_USERNAME,
    APP_PASSWORD: process.env.APP_PASSWORD
  },

  // Raporlama ayarları
  reporter: 'cypress-mochawesome-reporter',

  // E2E test ayarları
  e2e: {
    baseUrl: 'https://www.pedogist.com/',
    setupNodeEvents(on, config) {
      // Mochawesome raporlama plugin'ini çağır
      require('cypress-mochawesome-reporter/plugin')(on);

      // Cypress-grep plugin'ini çağır
      registerCypressGrep(on, config);
      
      // En son config objesini geri döndür
      return config;
    },
  },
});