var addVisitPage = require(browser.__pagesDir + '/addvisit');

describe('PetClinic add visit page', function () {

	beforeEach(function () {
		addVisitPage.get();

	});

	it('Add pet button should be availible', function () {
		var addVisitButtonAvailible = element(by.css('table > tbody > tr > td:nth-child(2) > a'));
		expect(addVisitButtonAvailible.isDisplayed()).toBe(true);
	});

	it('Visit should added when all attributes provided.', function () {
		addVisitPage.addVisit("2015-05-10","no eat anything");
		element(by.css('body > div > div > form > div:nth-child(2) > div > button')).click();
		var correctlyAddedVisit = element(by.css('tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(2)'));
		expect(correctlyAddedVisit.getText().isDisplayed()).toBeTruthy();
	});

	it('Visit not should added when one attribute is not provided', function () {
		addVisitPage.addVisit("2015-05-10","");
		element(by.css('body > div > div > form > div:nth-child(2) > div > button')).click();
		expect(addVisitPage.checkPrompt().isDisplayed()).toBe(true);
	});

});