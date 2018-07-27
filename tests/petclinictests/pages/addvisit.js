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
};

this.checkPrompt = function () {
  return element(by.css('span.help-inline'));
};

};

AddVisitPage.prototype = Object.create(Page.prototype);
AddVisitPage.prototype.constructor = AddVisitPage;

module.exports = new AddVisitPage();
