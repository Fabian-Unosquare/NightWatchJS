module.exports = {
	'Demo test cssProperty' : function(browser){
	browser
	.windowMaximize()
	.url('https://www.unosquare.com')
	.waitForElementVisible('body')
	.assert.cssProperty("li a[href = '/About']", 'display', 'block')
	.assert.not.cssProperty("li a[href = '/About']", 'font-size', '12px');
	browser.end();
	}
}