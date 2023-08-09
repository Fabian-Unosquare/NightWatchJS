function getData() {
	return require('C:\\Users\\fabian.sanchez\\Documents\\nightwatch\\dataExternal\\unosquareProjectForm');
};

var validateNames = {
	namesUnosquare: function(){
		this.api.pause(1000);
		const form = getData();
		return this.waitForElementVisible('@blogButton', 1000)
			.click('@blogButton')
			.assert.elementPresent('@digitalHeader')
			.verify.urlEquals("https://blog.unosquare.com/")
			.click('@aboutUs')
			.pause(2000)
			.waitForElementVisible("@namesAboutUs")
			.moveToElement("@namesAboutUs",10,10)
			.verify.containsText("div[data-elementor-id='129']", form.name1)
			.verify.containsText("div[data-elementor-id='129']", form.name2)
			.verify.containsText("div[data-elementor-id='129']", form.name3)
			.verify.containsText("div[data-elementor-id='129']", form.name4)
			.verify.containsText("div[data-elementor-id='129']", form.name5)
			
			
			
		browser.end();
	}
};

module.exports = {
	
	url: 'https://www.unosquare.com',
	commands: [validateNames],
	elements: {
		blogButton: {
			selector: "li[id='menu-item-3416']"
		},
		
		digitalHeader: {
			selector: "h1[class='elementor-heading-title elementor-size-default']"
		},
		
		aboutUs: {
			selector: "li[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-3454']"
		},
		
		namesAboutUs: {
			selector: "div[data-id='ca520b7']"
		}
		
	}
	
}