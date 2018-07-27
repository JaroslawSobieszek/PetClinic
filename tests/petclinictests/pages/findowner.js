var Page = require('./page');

var FindOwnerPage = function () {

  Page.call(this);

  var self = this;

  this.subMenuItems = element.all(by.css('#'));

  this.get = function () {
    this.load('/owners/find');
  };

  this.getHeadText2 = function () {
    var list = this.subMenuItems.map(function (element) {
      return element.getText();
    });
    return list;
  }

  this.addUser = function (fName, lName, Address, city, phone) {
    element(by.css('body > div > div > a')).click();
    element(by.css('#firstName')).sendKeys(fName);
    element(by.css('#lastName')).sendKeys(lName);
    element(by.css('#address')).sendKeys(Address);
    element(by.css('#city')).sendKeys(city);
    element(by.css('#telephone')).sendKeys(phone);
    element(by.css('div:nth-child(2) > div > button')).click();
  };

  this.isUserAdded = function (fName, lName, Address, city, phone) {
    return element(by.css('table:nth-child(2)')).isDisplayed();
  };

  this.displayAllOwners = function () {
    element(by.css('#search-owner-form button')).click();
  };

  this.isOwnerListDisplayed = function () {
    return element(by.css('#vets')).isDisplayed();
  };

  this.checkPrompt = function () {
    return element(by.css('span.help-inline'));
  };
  // this.editUser = function (fName, lName, Address, city, phone) {
  //   element(by.css('body > div > div > a:nth-child(3)')).click();
  //   element(by.css('#firstName')).clear().sendKeys(fName);
  //   element(by.css('#lastName')).clear().sendKeys(lName);
  //   element(by.css('#address')).clear().sendKeys(Address);
  //   element(by.css('#city')).clear().sendKeys(city);
  //   element(by.css('#telephone')).clear().sendKeys(phone);
  //   element(by.css('#add-owner-form > div:nth-child(2) > div > button')).click();
  // };
};

FindOwnerPage.prototype = Object.create(Page.prototype);
FindOwnerPage.prototype.constructor = FindOwnerPage;

module.exports = new FindOwnerPage();
