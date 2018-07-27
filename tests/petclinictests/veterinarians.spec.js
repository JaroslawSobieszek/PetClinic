var veterinariansPage = require(browser.__pagesDir + '/veterinarians');

describe('PetClinic veterinarians page', function() {

	beforeEach(function () {
		veterinariansPage.get();
	});
	
	it('Should present all veterinarians when user is on Veterinarians page', function(){
			expect(veterinariansPage.getVetList().isDisplayed());
	});
});
