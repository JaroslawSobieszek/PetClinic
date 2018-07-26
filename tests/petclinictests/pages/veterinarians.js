var Page = require('./page');

var VeterinariansPage = function () { 

Page.call(this);

var self = this;

this.subMenuItems = element.all(by.css('h3'));

this.get = function () {
  this.load('/vets.html');
};

this.getHeadText2 = function () {
  var list = this.subMenuItems.map(function (element) {
    return element.getText();
  });
 return list;
}
};

VeterinariansPage.prototype = Object.create(Page.prototype);
VeterinariansPage.prototype.constructor = VeterinariansPage;

module.exports = new VeterinariansPage();
