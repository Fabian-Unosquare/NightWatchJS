module.exports = {

	'Demo test contains text' : function(browser) {
	browser
	.windowMaximize()
	.url('https://www.unosquare.com')
	.waitForElementVisible('body')
	.assert.containsText("li a[href = '/Services']", "SERVICES") //This is case Sensitive
	.end();
	}
};