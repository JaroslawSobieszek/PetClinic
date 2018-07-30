var addVisitPage = require(browser.__pagesDir + '/addvisit');

describe('PetClinic add visit page', function () {

	beforeEach(function () {
		addVisitPage.get();

	});

	it('Add pet button should be availible', function () {
		var AVAILIBLE = true;
		expect(addVisitPage.addVisitButtonAvailible()).toBe(AVAILIBLE);
	});

	it('Visit should added when all attributes provided.', function () {
		addVisitPage.addVisit("2015-05-10","no eat anything");
		expect(addVisitPage.getAddedVisit()).toBeTruthy();
	});

	it('Visit not should added when one attribute is not provided', function () {
		var DISPLAYED = true;
		addVisitPage.addVisit("2015-05-10","");
		expect(addVisitPage.checkPrompt()).toBe(DISPLAYED);
	});

});