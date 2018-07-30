var Page = require('./page');

var EditPetPage = function () { 

Page.call(this);

var self = this;

this.get = function () {
  this.load('/owners/1/pets/1/edit');
};

this.getForOwnerAndPet = function (owner, pet) {
  this.load('/owners/'+(owner)+'/pets/'+(pet)+'/edit');
};

this.provideNewPetType = function(type){
  element(by.css('#type')).sendKeys(type);
  element(by.css('button.btn-default')).click();
}
this.getPetType = function() {
  return element(by.css('td:nth-child(1) > dl > dd:nth-child(6)')).getText();
}

this.getPromptError= function () {
  return element(by.css('span.help-inline')).isDisplayed();
}

this.providedNoData= function () {
  element(by.css('#name')).clear();
  element(by.css('button.btn-default')).click();
}
};

EditPetPage.prototype = Object.create(Page.prototype);
EditPetPage.prototype.constructor = EditPetPage;

module.exports = new EditPetPage();
