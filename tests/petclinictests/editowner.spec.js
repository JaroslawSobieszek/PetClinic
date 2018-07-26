var editOwnerPage = require(browser.__pagesDir + '/editowner');

describe('PetClinic edit owner page', function () {

	beforeEach(function () {
		editOwnerPage.get();
	});
	// Edit Owner
	xit('Owner should be updated when user changes all attributes', function () {
		var firstOwnerOnTheList = element(by.css('tr:nth-child(1) > td:nth-child(1) > a')).click();
		element(by.css('div > a:nth-child(3)')).click();

		element(by.css('#firstName')).clear().sendKeys("Jordan");
		element(by.css('#lastName')).clear().sendKeys("Belfort");
		element(by.css('#address')).clear().sendKeys("Wall Street 99");
		element(by.css('#city')).clear().sendKeys("New York");
		element(by.css('#telephone')).clear().sendKeys("777888999");

		element(by.css('div:nth-child(2) > div > button')).click();

		expect(element(by.css('div > table:nth-child(2)')).isDisplayed()).toBe(true);
		// ;
		//var all = element.all(by.css('.table#vets.table.table-striped > tbody > tr > td > a'));
		//console.log(all.get(0).getText());

		// grid.each(function(row) {
		// 	var rowElems = row.$$('td');
		// 	console.log(rowElems.get(0).getText());
		//expect(rowElems.count()).toBe(3);
		//expect(rowElems.get(0).getText()).toMatch('/Col1$/');
	});
	xit('Owner should not be updated when one of the attributes is not provided', function () {
		var firstOwnerOnTheList = element(by.css('tr:nth-child(1) > td:nth-child(1) > a')).click();
		element(by.css('div > a:nth-child(3)')).click();
		element(by.css('#city')).clear();

		var EC = protractor.ExpectedConditions;
		element(by.css('div:nth-child(2) > div > button')).click();
		var isText2Present = element(by.css('span.help-inline'));
		var validText = EC.textToBePresentInElement(isText2Present, 'must not be empty');
		expect(browser.wait(validText, 1000)).toBeTruthy();
	});
	
	xit('Owner should not be updated when phone number is incorrect', function () {
		var firstOwnerOnTheList = element(by.css('tr:nth-child(1) > td:nth-child(1) > a')).click();
		element(by.css('div > a:nth-child(3)')).click();
		element(by.css('#telephone')).sendKeys("00");

		var EC = protractor.ExpectedConditions;
		element(by.css('div:nth-child(2) > div > button')).click();
		var isText2Present = element(by.css('span.help-inline'));
		
		expect(isText2Present.isDisplayed()).toBe(true);
	});

	// element(by.css('div:nth-child(2) > div > button')).click();
	// var displayList = element(by.css('table:nth-child(2)'));
	// expect(displayList.isDisplayed()).toBe(true);

});
