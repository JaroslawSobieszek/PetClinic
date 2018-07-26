var findOwnerPage = require(browser.__pagesDir + '/findowner');

describe('PetClinic find owner page', function () {

	beforeEach(function () {
		findOwnerPage.get();
	});
	// Find Owner
	it('Should present all owners when filter not specified', function () {
		var findOwnerButton = element(by.css('#search-owner-form button')).click();
		var displayedList = element(by.css('#vets'));
		expect(displayedList.isDisplayed()).toBe(true);

	});
	it('Should present matching owners when filter provided', function () {
		var name = element(by.css('#lastName')).sendKeys('Franklin');
		var findOwnerButton = element(by.css('#search-owner-form button')).click();
		var displayedList = element(by.css('table:nth-child(2)'));
		expect(displayedList.isDisplayed()).toBe(true);
		//  expect(findOwnerPage.getHeadText2()).toEqual(['Get in Touch', 'Address' ]);
	});
	// Add Owner
	it('Owner should be added when user provides First and Last name, address, city and telephone', function () {
		element(by.css('body > div > div > a')).click();
		var firstName = element(by.css('#firstName')).sendKeys("Jordan");
		var lastName = element(by.css('#lastName')).sendKeys("Belfort");
		var address = element(by.css('#address')).sendKeys("Wall Street 99");
		var address = element(by.css('#city')).sendKeys("New York");
		var telephone = element(by.css('#telephone')).sendKeys("777888999");

		element(by.css('div:nth-child(2) > div > button')).click();
		var displayList = element(by.css('table:nth-child(2)'));
		expect(displayList.isDisplayed()).toBe(true);
		//var subMenuItems = element.all(by.css('form-group.has-feedback > #'));
		// subMenuItems.get(1).sendKeys("abc");

	});

	it('Owner should not be added when one of the attributes is not provided', function () {
		element(by.css('body > div > div > a')).click();
		var firstName = element(by.css('#firstName')).sendKeys("Jordan");
		var lastName = element(by.css('#lastName')).sendKeys("");
		var address = element(by.css('#address')).sendKeys("Wall Street 99");
		var address = element(by.css('#city')).sendKeys("New York");
		var telephone = element(by.css('#telephone')).sendKeys("111222333");

		element(by.css('div:nth-child(2) > div > button')).click();

		var displayedPrompt = element(by.css('span.help-inline'));
		expect(displayedPrompt.isDisplayed()).toBe(true);
		//var subMenuItems = element.all(by.css('form-group.has-feedback > #'));
		// subMenuItems.get(1).sendKeys("abc");
		// var displayedList = element(by.css('#vets'));

		// expect(displayedList.isDisplayed()).toBe(true);
	});

	it('Owner should not be added when phone number is incorrect', function () {
		element(by.css('body > div > div > a')).click();
		var firstName = element(by.css('#firstName')).sendKeys("Jordan");
		var lastName = element(by.css('#lastName')).sendKeys("Belfort");
		var address = element(by.css('#address')).sendKeys("Wall Street 99");
		var address = element(by.css('#city')).sendKeys("New York");
		var telephone = element(by.css('#telephone')).sendKeys("@");

		element(by.css('div:nth-child(2) > div > button')).click();

		var displayedPrompt = element(by.css('span.help-inline'));
		expect(displayedPrompt.isDisplayed()).toBe(true);
	});

	// Edit Owner
	it('Owner should be updated when user changes all attributes', function () {
		element(by.css('body > div > div > a')).click();
		var firstName = element(by.css('#firstName')).sendKeys("Jordan");
		var lastName = element(by.css('#lastName')).sendKeys("Belfort");
		var address = element(by.css('#address')).sendKeys("Wall Street 99");
		var address = element(by.css('#city')).sendKeys("New York");
		var telephone = element(by.css('#telephone')).sendKeys("777888999");

		element(by.css('div:nth-child(2) > div > button')).click();
		var displayList = element(by.css('table:nth-child(2)'));
		expect(displayList.isDisplayed()).toBe(true);

	});
});