var Page = require('./page');

var HomePage = function() {

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

  this.get = function() {
	  this.load('/');    
  };

  this.clickMenuAtIdx = function(idx) {
    this.menuItems.get(idx).click();
  };

  this.getMenuTextAtIdx = function(idx) {
    return this.menuItems.get(idx);
  };

  this.getHeader = function() {
    return element(by.css('div > h2'));
  };
  
};

HomePage.prototype = Object.create(Page.prototype);
HomePage.prototype.constructor = HomePage;

module.exports = new HomePage();
