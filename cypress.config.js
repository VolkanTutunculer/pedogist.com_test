const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,

  e2e: {
    baseUrl: 'https://www.pedogist.com/',
    setupNodeEvents(on, config) {
    },
  },
});