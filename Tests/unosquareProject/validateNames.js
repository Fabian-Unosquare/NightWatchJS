module.exports = {
	'Test 1 : UnosquareProject' : function(browser){
		var unosquare = browser.page.mainPageProject();
		unosquare
		.navigate()
		.namesUnosquare();
		browser.end();
	}
};