var editPetPage = require(browser.__pagesDir + '/editpet');

describe('PetClinic edit pet page', function () {

	beforeEach(function () {
		editPetPage.get();
	});

	it('Pet should be updated when user change one attribute', function () {
		element(by.css('#type')).sendKeys('hamster');
		element(by.css('div:nth-child(3) > div > button')).click();
		var correctPetName = element(by.css('td:nth-child(1) > dl > dd:nth-child(6)'));
		expect(correctPetName.getText()).toEqual('hamster');
	});

	it('Pet should not be updated when one attribute is not provided', function () {
		element(by.css('#name')).clear();
		element(by.css('div:nth-child(3) > div > button')).click();
		var displayedPrompt = element(by.css('span.help-inline'));
		expect(displayedPrompt.isDisplayed()).toBe(true);
	});
});