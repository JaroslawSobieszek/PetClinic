var Page = require('./page');

var HomePage = function () {

  /**
   * Call super constructor.
   */
  Page.call(this);

  /**
   * Self reference.
   */
  var self = this;

  //this.menuItems = element.all(by.css('ul.nav > li > a')); 
  this.menuItems = element.all(by.css('ul.nav.navbar-nav.navbar-right > li > a'));

  this.clickMenuAtIdx = function (idx) {
      return this.menuItems.get(idx).click();

  };

  this.get = function () {
    this.load('/');
  };

  this.getHeader = function () {
    return element(by.css('div > h2')).getText();
  };
  // this.menuItems = element.all(by.css('ul.nav.navbar-nav.navbar-right > li > a'));

  // this.clickMenuAtIdx = function (idx) {
  //   this.menuItems.get(idx).click();
  // };
};

HomePage.prototype = Object.create(Page.prototype);
HomePage.prototype.constructor = HomePage;

module.exports = new HomePage();
