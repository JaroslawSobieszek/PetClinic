var Page = require('./page');

var AddPetPage = function () { 

Page.call(this);

var self = this;

this.subMenuItems = element.all(by.css(''));

this.get = function () {
  this.load('/owners/new');
};

this.getHeadText2 = function () {
  var list = this.subMenuItems.map(function (element) {
    return element.getText();
  });
 return list;
}
};

AddPetPage.prototype = Object.create(Page.prototype);
AddPetPage.prototype.constructor = AddPetPage;

module.exports = new AddPetPage();
