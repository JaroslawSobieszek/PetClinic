var findOwnerPage = require(browser.__pagesDir + '/findowner');

describe('PetClinic find owner page', function () {

	beforeEach(function () {
		findOwnerPage.get();
	});

	it('Should present all owners when filter not specified', function () {
		var DISPLAYED = true;
		expect(findOwnerPage.isOwnerListDisplayed()).toBe(DISPLAYED);
	});

	it('Should present matching owners when filter provided', function () {
		var DISPLAYED = true;
		findOwnerPage.searchByLastName('Davis');
		expect(findOwnerPage.getFilteredListOwners()).toBe(DISPLAYED);
	});

	it('Owner should be added when user provides First and Last name, address, city and telephone', function () {
		var DISPLAYED = true;
		findOwnerPage.addUser("Jordan", "Belfort", "Wall Street 99", "New York", "777888999");
		expect(findOwnerPage.isUserAdded()).toBe(DISPLAYED);
	});

	it('Owner should not be added when one of the attributes is not provided', function () {
		var DISPLAYED = true;
		findOwnerPage.addUser("Jordan", "", "Wall Street 99", "New York", "111222333");
		expect(findOwnerPage.checkPrompt()).toBe(DISPLAYED);
	});

	it('Owner should not be added when phone number is incorrect', function () {
		var DISPLAYED = true;
		findOwnerPage.addUser("Jordan", "Belfort", "Wall Street 99", "New York", "incorrect phone number")
		expect(findOwnerPage.checkPrompt()).toBe(DISPLAYED);
	});
});