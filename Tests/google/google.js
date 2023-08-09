module.exports = {
	' Google demo test 1' : function(browser){
		const gmailLink = element('a[aria-label="Gmail (abre una pestaña nueva)"]');
		browser
		.url("https://www.google.com")
		.assert.urlContains("google")
		.click(gmailLink)
		.assert.urlContains("about")
		browser.end();
	}
	
	
}