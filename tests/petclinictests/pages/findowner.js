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
};

FindOwnerPage.prototype = Object.create(Page.prototype);
FindOwnerPage.prototype.constructor = FindOwnerPage;

module.exports = new FindOwnerPage();
