module.exports = {
	'Send pull request 1' : function(browser){
	browser
    .windowMaximize()
    .url('https://www.google.com')
	.waitForElementVisible('body')
	.assert.visible('body')
	.assert.titleEquals('Google')
	.assert.urlContains('gle')
	.assert.urlEquals("https://www.google.com/")
	browser.end();
	}
}