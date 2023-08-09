module.exports = {
	'Demo test assertNotattributeContains' : function(browser){
	browser
	.windowMaximize()
	.url('https://www.unosquare.com')
	.assert.attributeContains("li a[href = '/Services']", 'class', 'nav')
	.end();
	}
};

