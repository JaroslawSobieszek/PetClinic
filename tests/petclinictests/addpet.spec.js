var addPetPage = require(browser.__pagesDir + '/addpet');

describe('PetClinic add pet page', function () {

	beforeEach(function () {
		addPetPage.get();

	});
	// Add Pet
	xit('Pet should added when all attributes are provided', function () {
		element(by.css('#firstName')).sendKeys("Jozef");
		element(by.css('#lastName')).sendKeys("Mindanao");
		element(by.css('#address')).sendKeys("Bhutan Street");
		element(by.css('#city')).sendKeys("Bombai");
		element(by.css('#telephone')).sendKeys("888999000");

		element(by.css('div:nth-child(2) > div > button')).click();
		element(by.css('div > a:nth-child(4)')).click();

		element(by.css('#name')).sendKeys("KingKong");
		element(by.css('#birthDate')).sendKeys("2000-12-20");
		element(by.css('#type')).sendKeys("lizard");
	
		element(by.css('body > div > div > form > div:nth-child(3) > div > button')).click();
		
		var correctPetName = element(by.css('body > div > div > table:nth-child(9) > tbody > tr > td:nth-child(1) > dl > dd:nth-child(2)'));
		expect(correctPetName.getText()).toEqual("KingKong");
		// var displayedListWithPet = element(by.css('div > h2:nth-child(8)'));
		// expect(displayedListWithPet.isDisplayed()).toBe(true);

		// var displayList = element(by.css('table:nth-child(2)'));
		// expect(displayList.isDisplayed()).toBe(true);
		// //var subMenuItems = element.all(by.css('form-group.has-feedback > #'));
		// subMenuItems.get(1).sendKeys("abc");

	});

	xit('Pet not should added when one attribute is not provided', function () {
		element(by.css('#firstName')).sendKeys("Marco");
		element(by.css('#lastName')).sendKeys("Milionaire");
		element(by.css('#address')).sendKeys("New Delhi Street");
		element(by.css('#city')).sendKeys("Bhutan");
		element(by.css('#telephone')).sendKeys("111222333");

		element(by.css('div:nth-child(2) > div > button')).click();
		element(by.css('div > a:nth-child(4)')).click();

		element(by.css('#name')).sendKeys("Killer");
		element(by.css('#birthDate')).sendKeys("");
		element(by.css('#type')).sendKeys("snake");
	
		element(by.css('body > div > div > form > div:nth-child(3) > div > button')).click();
		var displayedPrompt = element(by.css('span.help-inline'));
		expect(displayedPrompt.isDisplayed()).toBe(true);
		// var correctPetName = element(by.css('body > div > div > table:nth-child(9) > tbody > tr > td:nth-child(1) > dl > dd:nth-child(2)'));
		// expect(correctPetName.getText()).toEqual("KingKong");
		//var subMenuItems = element.all(by.css('form-group.has-feedback > #'));
		// subMenuItems.get(1).sendKeys("abc");
		// var displayedList = element(by.css('#vets'));

		// expect(displayedList.isDisplayed()).toBe(true);
	});

	xit('Pet not should added when provided name exists in database', function () {
		element(by.css('#firstName')).sendKeys("Alberto");
		element(by.css('#lastName')).sendKeys("Andrade");
		element(by.css('#address')).sendKeys("Milano Street");
		element(by.css('#city')).sendKeys("Italy");
		element(by.css('#telephone')).sendKeys("888844444");

		element(by.css('div:nth-child(2) > div > button')).click();
		element(by.css('div > a:nth-child(4)')).click();
		
		element(by.css('#name')).sendKeys("Killer");
		element(by.css('#birthDate')).sendKeys("1900-10-19");
		element(by.css('#type')).sendKeys("snake");

		element(by.css('body > div > div > form > div:nth-child(3) > div > button')).click();
		element(by.css('body > div > div > a:nth-child(4)')).click();

		element(by.css('#name')).sendKeys("Killer");
		element(by.css('#birthDate')).sendKeys("2000-12-10");
		element(by.css('#type')).sendKeys("dog");

		element(by.css('body > div > div > form > div:nth-child(3) > div > button')).click();

		var displayedPrompt = element(by.css('span.help-inline'));
		expect(displayedPrompt.isDisplayed()).toBe(true);
	});

	// Edit Pet
	xit('Owner should be updated when user changes all attributes', function () {
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