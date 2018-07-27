var homePage = require(browser.__pagesDir + '/home');

describe('PetClinic homepage', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('Should have home page with title "PetClinic :: a Spring Framework demonstration"', function(){
		expect(homePage.getTitle()).toEqual("PetClinic :: a Spring Framework demonstration");
	});
	
	it('Should present "Welcome" head on the Home page', function(){
		expect(homePage.getHeader().getText()).toEqual('Welcome');
	});
});
