var Page = require('./page');

var EditPetPage = function () { 

Page.call(this);

var self = this;

this.subMenuItems = element.all(by.css(''));

this.get = function () {
  this.load('/owners/1/pets/1/edit');
};

this.getHeadText2 = function () {
  var list = this.subMenuItems.map(function (element) {
    return element.getText();
  });
 return list;
}
};

EditPetPage.prototype = Object.create(Page.prototype);
EditPetPage.prototype.constructor = EditPetPage;

module.exports = new EditPetPage();
