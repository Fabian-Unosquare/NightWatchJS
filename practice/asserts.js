module.exports = {
	'Demo asserts test' : function(browser){
		browser
		.windowMaximize()
		.url('https://www.unosquare.com')
		.waitForElementVisible('body')
		.verify.visible('body')
		.url('https://www.google.com')
		.assert.visible('Gmail')
		.end();
	}
};