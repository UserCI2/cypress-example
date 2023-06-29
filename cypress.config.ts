const { defineConfig } = require("cypress");
require('dotenv').config()

export default defineConfig({
  projectId: '2pt4o7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: "e2e/register.spec.ts",
    defaultCommandTimeout: 5000,
    specPattern: 'e2e/register.spec.ts'
  },
});
