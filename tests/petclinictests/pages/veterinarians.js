var Page = require('./page');

var VeterinariansPage = function () { 

Page.call(this);

var self = this;

this.get = function () {
  this.load('/vets.html');
};

this.getHeadText2 = function () {
  var list = this.subMenuItems.map(function (element) {
    return element.getText();
  });
 return list;
 }
 this.getVetList = function() {
  return element(by.css('#vets'));
};
};
VeterinariansPage.prototype = Object.create(Page.prototype);
VeterinariansPage.prototype.constructor = VeterinariansPage;

module.exports = new VeterinariansPage();
