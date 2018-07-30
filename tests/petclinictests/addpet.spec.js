var addPetPage = require(browser.__pagesDir + '/addpet');

describe('PetClinic add pet page', function () {

	beforeEach(function () {
		addPetPage.get();
	});
	
	it('Pet should added when all attributes are provided', function () {
		var PET_NAME = 'Killer';
		addPetPage.addPetOwner("Jozef","Mindanao","Bhutan Street","Bombai","888999000");
		addPetPage.addPet(PET_NAME, "2010-10-19", "cat");
		expect(addPetPage.getPetName()).toEqual(PET_NAME);
	});

	it('Pet not should added when one attribute is not provided', function () {
		var DISPLAYED = true;
		addPetPage.addPetOwner("Marco", "Milionaire", "New Delhi Street", "Bhutan", "111222333");
		addPetPage.addPet("Killer", "", "cat");	
		expect(addPetPage.checkPrompt()).toBe(DISPLAYED);
	});

	it('Pet not should added when provided name exists in database', function () {
		var PET_NAME = 'Killer';
		var DISPLAYED = true;
		addPetPage.addPetOwner("Alberto", "Andrade", "Milano Street", "Italy", "888844444");
		addPetPage.addPet(PET_NAME, "1900-10-19", "snake");
		addPetPage.addNewPet(PET_NAME, "2000-11-10", "dog");
		expect(addPetPage.checkPrompt()).toBe(DISPLAYED);
	});
});