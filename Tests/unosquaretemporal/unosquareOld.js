module.exports = {
	
	' unosquare demo test 1' : function(browser){
		browser
		.url("https://www.unosquare.com/")
		//.setValue("//input[@id='input']", "best blues music")
		.assert.urlContains("unosquare")
		browser.end();
	}
}