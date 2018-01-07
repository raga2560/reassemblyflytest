import { browser, element, by, ElementFinder } from 'protractor';

describe('Example E2E Test', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('the home tab is displayed by default', () => {

  // expect(element(by.css('[aria-selected=true] .tab-button-text')) // Grab the title of the selected tab  
       expect(element(by.id('hometitle')) // Grab the title of the selected tab 
        .getAttribute('innerHTML')) // Get the text content
        .toContain('Insurance Home'); // Check if it contains the text "Home"
		

  });

  it('the user can browse to the contact tab and view the ionic twitter handle', () => {

    // Click the 'About' tab
    let btn = element(by.buttonText('Insurances'));

	
	
	btn.click();
      // Wait for the page transition
      browser.driver.sleep(5000);

      expect(element(by.buttonText('Transit Insurance')) // Grab the label of the list item
        .getAttribute('innerHTML')) // Get the text content
        .toContain('Transit Insurance'); // Check if it contains the text "@ionicframework"

    

  }); 

});