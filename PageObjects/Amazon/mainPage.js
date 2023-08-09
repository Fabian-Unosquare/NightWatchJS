function getData(){
	return require('C:\\Users\\fabian.sanchez\\Documents\\nightwatch\\dataExternal\\amazonProduct');
};


var validateProductPrice = {
	productsAmazon: function(){
		this.api.pause(1000);
		this.pause()
		const form = getData();
		return this.waitForElementVisible('@searchField', 1000)
			.setValue('@searchField', form.product)
			.click('@searchButton')
			.waitForElementVisible('@searchResults')
			.getText('@searchResultPrices', function(result){
				console.log("Current price: " + result.value);
				var SearchPrice = result.value;
				this.click("a[class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']")			
				this.assert.containsText("span[class='a-price-whole']", SearchPrice)				
				this.click("input[id='add-to-cart-button']")
				this.click("div[id='nav-cart-count-container']")
				this.assert.containsText("span[id='sc-subtotal-amount-activecart']", SearchPrice)
				this.click("input[data-action='delete']")	
			});
			browser.end();					
	}
};

module.exports = {
	
	url: 'https://www.amazon.com',
	commands: [validateProductPrice],
	elements: {
		
		searchField: {
			selector: "input[id='twotabsearchtextbox']"
		},
		
		searchButton: {
			selector: "input[type='submit']"
		},
		
		searchResults: {
			//selector: "div[class='a-section']"
			selector: "a[class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']"
		},
		
		searchResultPrices: {
			selector: "span[class='a-price-whole']"
			//selector: "span[class='a-price-whole']"
		},
		
		productPagePrice: {
			//selector: "div[class='a-section a-spacing-micro']"
			selector: "span[class='a-price aok-align-center']"
		},
		
		productPageAddCartButton: {
			selector: "input[id='add-to-cart-button']"
		},
		
		productPageCartIcon: {
			selector: "div[id='nav-cart-count-container']"
		},
		
		cartPageSubPrice1: {
			selector: "span[id='sc-subtotal-amount-activecart']"
		},
		
		cartPageDeleteItem1: {
			selector: "input[data-action='delete']"
		}
		
	}	
};