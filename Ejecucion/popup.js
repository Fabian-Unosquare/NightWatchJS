module.exports = {
	'Second pull request 1' : function(browser){
	const searchButton = element('button[class="DocSearch DocSearch-Button"]');
	const firstResult = element('div[class=DocSearch-Hit-icon]');
	const searchField = element('input[class="DocSearch-Input"]');
	const headerPage = element('header[id=header]');
	const footerText = element('div[class=footer-text]');
	var footerTextValidation = 'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.';
	const sectionContainer = element('section[id=index-container]');
	
	browser
    .windowMaximize()
    .url('https://nightwatchjs.org/')
	.pause(500)
	.assert.urlEquals('https://nightwatchjs.org/')
	.click('a[class=hero__action-button--get-started]')
	.waitForElementVisible(searchButton, 1000)
	.click(searchButton)
	.setValue(searchField, "assert")
	.pause(500)
	.keys(browser.Keys.ENTER)
	.url('https://nightwatchjs.org/api/assert/visible.html#assert.visible')
	.assert.visible(headerPage)
	.assert.urlContains('visible')
	.useXpath().click("//li[@class]/a[text()='Blog']")
	.assert.attributeContains(sectionContainer, 'id', 'index-container')
	.assert.attributeContains(sectionContainer, 'style', 'background')
	.assert.textContains(footerText, footerTextValidation)
	/*
	.windowHandles(function(result) {
		var defaultWindowHandle = result.value[0];
		var popupWindow = result.value[1];
		console.log("window name: " + defaultWindowHandle);
		console.log("Window: " + popupWindow);
	})
	*/
	/*
	.windowHandles(function (result) {
				var defaultWindowHandle = result.value[0];
                var handle = result.value[1];
				console.log(handle);
                browser.switchWindow(handle);
	})
	*/
	//.click(firstResult)
	//.waitForElementVisible(firstResult, 500)
	//.waitForElementPresent(firstResult, 2000)
	/*
	.waitForElementVisible(firstResult, 2500)
	//.pause()
	.click(firstResult)
	browser.end();
	*/
	}
}