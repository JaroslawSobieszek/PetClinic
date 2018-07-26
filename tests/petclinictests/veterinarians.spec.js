var contactPage = require(browser.__pagesDir + '/findowner');

describe('How to do it in JS homepage', function() {

	beforeEach(function () {
		contactPage.get();
	});

	xit('should have home page with title "Protractor workshop | Contact us"', function(){
		expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
	});
	xit('should have "Get in touch" and "Address" sections on Contact Us page', function () {
		expect(contactPage.getHeadText2()).toEqual(['Get in Touch', 'Address' ]);
	});
	// xit('should contain correct speakers', function(){
	// 	homePage.scrolltoSperakersSection();
	// 	homePage.takeScreenshot("screen-1");
	// 	homePage.scrollPageDown();
	// 	homePage.takeScreenshot("screen-2");
	// 	homePage.scrollPageDown();
	// 	homePage.takeScreenshot("screen-3");
	// 	expect(homePage.getSpeakers()).toEqual(speakers.data);
	// });

});
