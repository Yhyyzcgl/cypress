const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.google.com",

    projectId: "kf9cf4",
    
    "video": false,
    //testlerin videoları kaydetmiyor
    //"video": true: testlerin videolarını kaydeder.
    //default olarak "video": true dur.

    //"retries": 2
    //Test FAIL olduğunda onu kaç kere daha çalıştırması gerektiğini belirtiyoruz.
    // "retries": 2 => 1 kere çalıştırıp hata aldığında; 2 defa daha dene
 
    
  },
});
