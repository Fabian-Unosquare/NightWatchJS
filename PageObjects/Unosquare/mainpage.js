/*
var validateContactUs = {
    contactUnosquare: function() {
      this.api.pause(1000);
      return this.waitForElementVisible('@contactusMenu', 1000)
        .click('@contactusMenu')
        .setValue('@fullNameTextField', 'Demo Full Name')
        .setValue('@emailTextField', 'demo_03@gmail.com')
        .setValue('@messageTextArea', 'This is a Random Text used in a Course')
        .click('@submitBtn')
        //.waitForElementVisible('@nameWarningMsg')
    }
};
*/

function getData() {
    //return require('C:/Users/fabian.sanchez/Documents/nightwatch/dataExternal/unosquareForm.js'); // Using the correct path is important
    return require('C:\\Users\\fabian.sanchez\\Documents\\nightwatch\\dataExternal\\unosquareForm'); // Using the correct path is important
    };

var validateContactUs = {
    contactUnosquare: function() {
      this.api.pause(1000);
      const form = getData(); // this is the important part
      return this.waitForElementVisible('@contactusMenu', 1000)
        .click('@contactusMenu')
        .setValue('@fullNameTextField', 'Demo Full Name')
        .setValue('@emailTextField', 'demo_03@gmail.com')
        .setValue('@messageTextArea', form.message)
        .click('@submitBtn')
        //.waitForElementVisible('@nameWarningMsg')
    }
  };



module.exports = {
    url: 'https://www.unosquare.com',
	//commands: [validateContactUs, clickinMultiplePages],
	commands: [validateContactUs],
    elements: {
      contactusMenu: {
        //selector: "li a[href = '/ContactUs']"
        selector: "div[data-id='fdff709']"
      },
      industriesMenu: {
        selector: "li a[href = '/Industries']"
      },
      aboutMenu: {
        selector: "li a[href = '/About']"
      },
      servicesMenu: {
        selector: "li a[href = '/Services']"
      },
      fullNameTextField: {
        selector: "input[name='firstname']"
      },
      emailTextField: {
        selector: "input[id='email-b0570355-5abf-47d4-b00c-fcf04db071cc']"
      },
      messageTextArea: {
        selector: "textarea[name='message']"
      },
      submitBtn: {
        selector: "input[value='Submit']"
      },
      nameWarningMsg: {
        selector: "div[class='rc-imageselect-desc-no-canonical']",
        locateStrategy: 'xpath'
      }
    }
  }