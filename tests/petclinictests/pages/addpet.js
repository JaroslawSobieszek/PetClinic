var Page = require('./page');

var AddPetPage = function () {

  Page.call(this);

  var self = this;

  this.get = function () {
    this.load('/owners/new');
  };

  this.addPetOwner = function (fName, lName, Address, city, phone) {
    element(by.css('#firstName')).sendKeys(fName);
    element(by.css('#lastName')).sendKeys(lName);
    element(by.css('#address')).sendKeys(Address);
    element(by.css('#city')).sendKeys(city);
    element(by.css('#telephone')).sendKeys(phone);
    element(by.css('div:nth-child(2) > div > button')).click();
    element(by.css('div > a:nth-child(4)')).click();
  };

  this.addPet = function (name, birthDate, type) {
    element(by.css('#name')).sendKeys(name);
    element(by.css('#birthDate')).sendKeys(birthDate);
    element(by.cssContainingText('option', type)).click();
    element(by.css('div:nth-child(3) > div > button')).click();
  };

  this.checkPrompt = function () {
    return element(by.css('span.help-inline')).isDisplayed();
  }
  
  this.getPetName = function () {
    return element(by.css('dd:nth-child(2)')).getText();
  }

  this.addNewPet = function (name, birthDate, type) {
    element(by.css('div > a:nth-child(4)')).click();
    element(by.css('#name')).sendKeys(name);
    element(by.css('#birthDate')).sendKeys(birthDate);
    element(by.cssContainingText('option', type)).click();
    element(by.css('div:nth-child(3) > div > button')).click();
  };
};

AddPetPage.prototype = Object.create(Page.prototype);
AddPetPage.prototype.constructor = AddPetPage;

module.exports = new AddPetPage();
