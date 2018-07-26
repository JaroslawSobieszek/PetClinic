var Page = require('./page');

var ErrorPage = function () { 

Page.call(this);

var self = this;

this.subMenuItems = element.all(by.css('h3'));

this.get = function () {
  this.load('/oups');
};

this.getHeadText2 = function () {
  var list = this.subMenuItems.map(function (element) {
    return element.getText();
  });
 return list;
}
};

ErrorPage.prototype = Object.create(Page.prototype);
ErrorPage.prototype.constructor = ErrorPage;

module.exports = new ErrorPage();
