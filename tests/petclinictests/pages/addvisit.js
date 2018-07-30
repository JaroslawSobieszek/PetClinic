var Page = require('./page');

var AddVisitPage = function () {

  Page.call(this);

  var self = this;

  this.subMenuItems = element.all(by.css(''));

  this.get = function () {
    this.load('/owners/1');
  };

  this.getHeadText2 = function () {
    var list = this.subMenuItems.map(function (element) {
      return element.getText();
    });
    return list;
  }

  this.addVisit = function (date, description) {
    element(by.css('table > tbody > tr > td:nth-child(2) > a')).click();
    element(by.css('#date')).clear().sendKeys(date);
    element(by.css('#description')).sendKeys(description);
    element(by.css('body > div > div > form > div:nth-child(2) > div > button')).click();
  };

  this.checkPrompt = function () {
    return element(by.css('span.help-inline')).isDisplayed();
  };
  this.addVisitButtonAvailible = function () {
    return element(by.css('table > tbody > tr > td:nth-child(2) > a')).isDisplayed();
  }

  this.getAddedVisit = function () {
    return element(by.xpath('/html/body/div/div/table[2]/tbody/tr/td[2]/table/tbody/tr[1]/td[2]')).getText().isDisplayed();
  }
};

AddVisitPage.prototype = Object.create(Page.prototype);
AddVisitPage.prototype.constructor = AddVisitPage;

module.exports = new AddVisitPage();
