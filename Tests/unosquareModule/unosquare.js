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
	
	'test pages validation' : function(browser) {
		
	function getData() {
    //return require('../../dataExternal/unosquareForm.json'); // Using the correct path is important
    return require('C:\Users\fabian.sanchez\Documents\nightwatch\dataExternal.json'); // Using the correct path is important
    };
		
    var validateContactUs = {
    contactUnosquare: function() {
      this.api.pause(1000);
      const form = getData(); // this is the important part
      return this.waitForElementVisible('@contactusMenu', 1000)
        .click('@contactusMenu')
        .setValue('@companyTextField', form.company)
        .setValue('@phoneTextField', form.phone)
        .setValue('@messageTextArea', form.message)
        .click('@submitBtn')
        .waitForElementVisible('@nameWarningMsg')
		.assert.equals(1,1)
		}
	};
	
	
	
	
	
	
	}
	
}




