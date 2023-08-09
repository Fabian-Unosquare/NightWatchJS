/*
module.exports = {
    'test pages validation' : function(browser) {
      var unosquare = browser.page.mainpage();

      unosquare
      .navigate()
      .waitForElementVisible('@contactusMenu')
      .click('@contactusMenu')
      .click('@industriesMenu')
      browser.end();
    }
}

*/

module.exports = {
    'test command example' : function(browser) {
      var unosquare = browser.page.mainpage();
      unosquare
      .navigate()
      .contactUnosquare();
      
      browser.end();
    }
};




