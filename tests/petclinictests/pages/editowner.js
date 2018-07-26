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
};

EditOwnerPage.prototype = Object.create(Page.prototype);
EditOwnerPage.prototype.constructor = EditOwnerPage;

module.exports = new EditOwnerPage();
