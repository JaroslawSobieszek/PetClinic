var editOwnerPage = require(browser.__pagesDir + '/editowner');

describe('PetClinic edit owner page', function () {

	beforeEach(function () {
		editOwnerPage.get();
	});

	it('Owner should be updated when user changes all attributes', function () {
		// var ownerNames = ["Morgan","McMillan","Brooklyn Bridge","Boston","018451739"];
		// // editOwnerPage.editOwner("Morgan","McMillan","Brooklyn Bridge","Boston","018451739");
		// editOwnerPage.editOwner(ownerNames[0],ownerNames[1],ownerNames[2],ownerNames[3],ownerNames[4]);
		// expect(editOwnerPage.isOwnerEdited()).toEqual(ownerNames);
		//  expect(element(by.css('div > table:nth-child(2)')).isDisplayed()).toBe(true);
		editOwnerPage.getOwnerData();
	});

	fit('Owner should not be updated when one of the attributes is not provided', function () {
		editOwnerPage.editOwnerCity();
		element(by.css('#add-owner-form > div:nth-child(2) > div > button')).click();
		expect(editOwnerPage.getPromptError().isDisplayed()).toBe(true);
	});

	it('Owner should not be updated when phone number is incorrect', function () {
		editOwnerPage.editOwnerTelephone("123456789");
		element(by.css('#add-owner-form > div:nth-child(2) > div > button')).click();
		expect(editOwnerPage.getPromptError().isDisplayed()).toBe(true);
	});

});
