var editPetPage = require(browser.__pagesDir + '/editpet');

describe('PetClinic edit pet page', function () {

	beforeEach(function () {
		var OWNER_WITH_ONE_PET = 5;
		var SINGLE_PET = 6;
		editPetPage.getForOwnerAndPet(OWNER_WITH_ONE_PET, SINGLE_PET);
	});

	it('Pet should be updated when user change one attribute', function () {
		var NEW_PET_TYPE = 'dog';
		editPetPage.provideNewPetType(NEW_PET_TYPE);
		expect(editPetPage.getPetType()).toEqual(NEW_PET_TYPE);
	});

	it('Pet should not be updated when one attribute is not provided', function () {
		var IS_DISPLAYED = true;
		editPetPage.providedNoData();
		expect(editPetPage.getPromptError()).toBe(IS_DISPLAYED);
	});
});