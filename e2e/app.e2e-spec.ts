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
  /*
  it('the user can browse to login screen', () => {

    // Click the 'About' tab
    let btn = element(by.buttonText('Login1'));

	
	
	btn.click();
      // Wait for the page transition
      browser.driver.sleep(5000);
	  
	  btn = element(by.id('fsbutton'));
	  
	  btn.click();
      // Wait for the page transition
      browser.driver.sleep(5000);


      expect(element(by.id('signupbutton')) // Grab the label of the list item
        .getAttribute('innerHTML')) // Get the text content
        .toContain('SIGN UP'); // Check if it contains the text "@ionicframework"

    
	
	
   	

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
    */
  
  it('check the user can login', () => {

    // Click the 'About' tab
    let btn = element(by.buttonText('Login1'));

	
	
	btn.click();
      // Wait for the page transition
      browser.driver.sleep(5000);
	  
	  btn = element(by.id('fsbutton'));
	  
	  
	  btn.click();
      // Wait for the page transition
      browser.driver.sleep(5000);


	  
	let s1 = element(by.css('.signup input[type="email"]'));
	browser.sleep(500);
	//s1.click();
	s1.sendKeys('hello1');
	/*
    let s2 = element(by.model('password'));
	s2.sendKeys("abcd");
	let s3 = element(by.model('password'));
	s3.sendKeys("abcd"); */

	
	btn = element(by.id('signupbutton'));

	
	
	btn.click();
      // Wait for the page transition
      browser.driver.sleep(5000);

   	

  }); 

});