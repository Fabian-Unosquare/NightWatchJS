module.exports = {
	'Test 2 : Amazon' : function(browser){
		var amazon = browser.page.mainPage();
		amazon
		.navigate()
		.productsAmazon();
		browser.end();
		
	}
};