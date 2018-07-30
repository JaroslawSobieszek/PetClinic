var Page = require('./page');

var EditOwnerPage = function () {

  Page.call(this);

  var self = this;

  this.subMenuItems = element.all(by.css(''));

  this.get = function () {
    this.load('/owners?lastName=');
  };

  this.getHeadText2 = function () {
    var list = this.subMenuItems.map(function (element) {
      return element.getText();
    });
    return list;
  }

  this.editOwner = function (fName, lName, Address, city, phone) {
    element(by.css('tr:nth-child(1) > td:nth-child(1) > a')).click();
    element(by.css('div > a:nth-child(3)')).click();
    element(by.css('#firstName')).clear().sendKeys(fName);
    element(by.css('#lastName')).clear().sendKeys(lName);
    element(by.css('#address')).clear().sendKeys(Address);
    element(by.css('#city')).clear().sendKeys(city);
    element(by.css('#telephone')).clear().sendKeys(phone);
    element(by.css('#add-owner-form > div:nth-child(2) > div > button')).click();
  };
  this.getOwnerData = function () {
    var owners = [];
    element(by.xpath('//*[@id="vets"]/tbody/tr[1]/td[1]/a')).click();
    element(by.css('div > a:nth-child(3)')).click();
    var a = element.all(by.css('.div form-control')).getText();
    // console.log("a:" + a.get(1));
    // console.log("a:" + a);
    // owners.push(a);
    // console.log("owners:" + owners);
    // element(by.css('#lastName')).getAttribute('value');
    // element(by.css('#address')).getAttribute('value');
    // element(by.css('#city')).getAttribute('value');
    // element(by.css('#telephone')).getAttribute('value');
  }
  this.getOwnerEdited = function () {
    return element.all(by.xpath('/html/body/div/div/table[1]/tbody/tr/td')).getText();
    // return element.all(by.xpath('/html/body/div/div/table[1]/tbody/tr[1]/td/b')).getText();
  
  };

  this.editOwnerCity = function (city) {
    element(by.css('tr:nth-child(1) > td:nth-child(1) > a')).click();
    element(by.css('div > a:nth-child(3)')).click();
    element(by.css('#city')).clear();
    element(by.css('div:nth-child(2) > div > button')).click();
  };

  this.editOwnerTelephone = function (phone) {
    element(by.css('tr:nth-child(1) > td:nth-child(1) > a')).click();
    element(by.css('div > a:nth-child(3)')).click();
    element(by.css('#telephone')).sendKeys(phone);
    element(by.css('div:nth-child(2) > div > button')).click();
  };
  
  this.displayedPrompt = function () {
    var promptLine = protractor.ExpectedConditions;
    element(by.css('div:nth-child(2) > div > button')).click();
    expected(promptLine.visibilityOf(element(by.css('#add-owner-form > div.form-group.has-feedback > div.form-group.has-error > div > span.help-inline')), 1000));

  }
  this.getPromptError = function () {
    return element(by.css('span.help-inline')).isDisplayed();
  }
};
EditOwnerPage.prototype = Object.create(Page.prototype);
EditOwnerPage.prototype.constructor = EditOwnerPage;

module.exports = new EditOwnerPage();
