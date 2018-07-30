var homePage = require(browser.__pagesDir + '/home');

describe('PetClinic homepage', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('Should have home page with title "PetClinic :: a Spring Framework demonstration"', function(){
		var HOME_PAGE_TITLE = "PetClinic :: a Spring Framework demonstration";
		expect(homePage.getTitle()).toEqual(HOME_PAGE_TITLE);
	});
	
	it('Should present "Welcome" head on the Home page', function(){
		var HEAD_ON_HOME_PAGE = 'Welcome';
		expect(homePage.getHeader()).toEqual(HEAD_ON_HOME_PAGE);
	});

	fit('Should be visible provided sub-page', function(){
		expect(homePage.clickMenuAtIdx(1));
		expect(homePage.clickMenuAtIdx(2));
		expect(homePage.clickMenuAtIdx(3));
		expect(homePage.clickMenuAtIdx(4));
	});

});
