module.exports = {
    before: function (browser) {
		browser.deleteCookies(function() {});
    },
	
	
	

    'API Testing - GET Positive': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            //var data = JSON.parse(response.body)
            console.log(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.title, "Galaxies in the River")
            browser.assert.equal(response.body.media_type, 'image')
            browser.assert.equal(response.body.service_version, 'v1')
        })
    },

    'API Testing - GET Negative': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.title, "Galaxies in the River")
        })
    },
	
	'API Testing - POST': function (browser) {
        var apiUrl = 'https://reqres.in/api/users'
        var postData = {'name':'QA CoE Name', 'job':'Unosquare QA'}
		console.log("ApiPost");
		
        browser.apiPost(apiUrl, postData, null, null, function (response) {
 
            browser.assert.equal(response.statusCode, '201')
            browser.assert.equal(response.body.name, 'QA CoE Name')
            browser.assert.equal(response.body.job, 'Unosquare QA')
        })
    },
	
	
	'API Testing - GET NASA APOD': function (browser) {
		var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
		browser.apiGet(apiUrl, function (response) {
			
			browser.assert.equal(response.statusCode, '200')
			browser.assert.equal(response.body.title, 'Galaxies in the River')
		})
	},
	
	'API Testing - GET NASA NEO' : function (browser) {
		var apiUrl = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY'
		browser.apiGet(apiUrl, function (response) {
			
			browser.assert.equal(response.statusCode, '200')
			browser.assert.equal(response.body.page.size, '20')
			browser.assert.equal(response.body.links.next , 'http://api.nasa.gov/neo/rest/v1/neo/browse?page=1&size=20&api_key=DEMO_KEY')
		})
	},
	

	'API Testing - POST reqres' : function (browser) {
		var apiUrl = 'https://reqres.in/api/login'
		var postData = {'email':'eve.holt@reqres.in', 'password' : 'cityslicka'}
		
		browser.apiPost(apiUrl, postData, null, null, function (response) { 
			browser.assert.equal(response.statusCode, '200')
			browser.assert.equal(response.body.token, 'QpwL5tke4Pnpja7X4')
		})		
	}
	
};