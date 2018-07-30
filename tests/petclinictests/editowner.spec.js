var editOwnerPage = require(browser.__pagesDir + '/editowner');

describe('PetClinic edit owner page', function () {

	beforeEach(function () {
		editOwnerPage.get();
	});

	it('Owner should be updated when user changes all attributes', function () {
		var ownerData = ['Morgan McMillan','Brooklyn Bridge','Boston','018451739'];
		editOwnerPage.editOwner("Morgan","McMillan","Brooklyn Bridge","Boston","018451739");
		expect(editOwnerPage.getOwnerEdited()).toEqual(ownerData);
		
	});

	it('Owner should not be updated when one of the attributes is not provided', function () {
		var DISPLAYED = true;
		editOwnerPage.editOwnerCity();
		expect(editOwnerPage.getPromptError()).toBe(DISPLAYED);
	});

	it('Owner should not be updated when phone number is incorrect', function () {
		var DISPLAYED = true;
		editOwnerPage.editOwnerTelephone("123456789");
		expect(editOwnerPage.getPromptError()).toBe(DISPLAYED);
	});

});
