var addPetPage = require(browser.__pagesDir + '/addpet');

describe('PetClinic add pet page', function () {

	beforeEach(function () {
		addPetPage.get();
	});
	
	it('Pet should added when all attributes are provided', function () {
		addPetPage.addPetOwner("Jozef","Mindanao","Bhutan Street","Bombai","888999000");
		addPetPage.addPet("Killer", "2010-10-19", "hamster");
		var correctPetName = element(by.css('body > div > div > table:nth-child(9) > tbody > tr > td:nth-child(1) > dl > dd:nth-child(2)'));
		expect(correctPetName.getText()).toEqual("Killer");
	});

	it('Pet not should added when one attribute is not provided', function () {
		addPetPage.addPetOwner("Marco", "Milionaire", "New Delhi Street", "Bhutan", "111222333");
		addPetPage.addPet("Killer", "", "snake");	
		expect(addPetPage.checkPrompt().isDisplayed()).toBe(true);
	});

	it('Pet not should added when provided name exists in database', function () {
		addPetPage.addPetOwner("Alberto", "Andrade", "Milano Street", "Italy", "888844444");
		addPetPage.addPet("Killer", "1900-10-19", "snake");
		element(by.css('div > a:nth-child(4)')).click();
		addPetPage.addPet("Killer", "2000-11-10", "dog");
		expect(addPetPage.checkPrompt().isDisplayed()).toBe(true);
	});
});