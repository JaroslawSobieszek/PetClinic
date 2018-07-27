var findOwnerPage = require(browser.__pagesDir + '/findowner');

describe('PetClinic find owner page', function () {

	beforeEach(function () {
		findOwnerPage.get();
	});

	it('Should present all owners when filter not specified', function () {
		findOwnerPage.displayAllOwners();
		expect(findOwnerPage.isOwnerListDisplayed()).toBe(true);
	});

	it('Should present matching owners when filter provided', function () {
		var name = element(by.css('#lastName')).sendKeys('Davis');
		var findOwnerButton = element(by.css('#search-owner-form button')).click();
		var displayedList = element(by.css('table:nth-child(2)'));
		expect(displayedList.isDisplayed()).toBe(true);
	});

	it('Owner should be added when user provides First and Last name, address, city and telephone', function () {
		findOwnerPage.addUser("Jordan", "Belfort", "Wall Street 99", "New York", "777888999");
		expect(findOwnerPage.isUserAdded()).toBe(true);
	});

	it('Owner should not be added when one of the attributes is not provided', function () {
		findOwnerPage.addUser("Jordan", "", "Wall Street 99", "New York", "111222333");
		element(by.css('div:nth-child(2) > div > button')).click();
		expect(findOwnerPage.checkPrompt().isDisplayed()).toBe(true);
	});

	it('Owner should not be added when phone number is incorrect', function () {
		findOwnerPage.addUser("Jordan", "Belfort", "Wall Street 99", "New York", "incorrect telephone number")
		element(by.css('div:nth-child(2) > div > button')).click();
		expect(findOwnerPage.checkPrompt().isDisplayed()).toBe(true);
	});
});