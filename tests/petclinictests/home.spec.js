var homePage = require(browser.__pagesDir + '/home');
require(browser.__pagesDir + '/home');
describe('PetClinic homepage', function() {

	beforeEach(function () {
		homePage.get();
	});

	xit('Should have home page with title "PetClinic :: a Spring Framework demonstration"', function(){
		expect(homePage.getTitle()).toEqual("PetClinic :: a Spring Framework demonstration");
	});

	xit('Should present "Welcome" head on the Home page', function(){
		var expectedHead = element(by.css('div > h2'));
		expect(expectedHead.getText()).toEqual('Welcome');
	});

});
