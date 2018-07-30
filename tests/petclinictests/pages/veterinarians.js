var Page = require('./page');

var VeterinariansPage = function () { 

Page.call(this);

var self = this;

this.get = function () {
  this.load('/vets.html');
};

 this.getVetList = function() {
  return element(by.css('#vets')).isDisplayed();
};
};
VeterinariansPage.prototype = Object.create(Page.prototype);
VeterinariansPage.prototype.constructor = VeterinariansPage;

module.exports = new VeterinariansPage();
