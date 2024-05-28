/// <reference types="cypress"/>

import FlightBookPage from '../../../pages/FlightBookPage'

const flightBookPage = new FlightBookPage



describe('Project 3 - Book your trip', () => {
  beforeEach(() => {
    cy.visit('https://techglobal-training.com/frontend/project-3');
  
})

  
it('Test Case 1 - Validate the default Book your trip form', () =>{
 
flightBookPage.getOneWayRadioButton().should('not.be.disabled').and('be.checked')
  
flightBookPage.getRoundTripRadioButton().should('not.be.disabled').and('not.be.checked')

flightBookPage.getCabinClassLabel().should('be.visible').and('have.text','Cabin Class')
flightBookPage.getCabinClassDropdown().should('be.visible')

flightBookPage.getFromLabel().should('be.visible').and('have.text','From')
flightBookPage.getFromDropdown().should('be.visible')

flightBookPage.getToLabel().should('be.visible').and('have.text', 'To')
flightBookPage.getToDropdown().should('be.visible')

flightBookPage.getDepartLabel().should('be.visible').and('have.text','Depart')
flightBookPage. getDepartDatePicker().should('be.visible')

flightBookPage.getReturnLabel().should('be.visible').and('have.text','Return')
flightBookPage.getReturnDatePicker().should('be.visible').and('be.disabled')

flightBookPage.getNumberOfPassengersLabel().should('be.visible').and('have.text','Number of passengers')
flightBookPage.getNumberOfPassengersDropdown().should('be.visible').and('have.value', '1')
  
flightBookPage.getPassengerCategoryLabel().should('be.visible').and('have.text','Passenger 1')
flightBookPage.getPassenger1CategoryDropdown().should('be.visible').and('contain', 'Adult (16-64)')
 
flightBookPage.getBookButton().should('be.visible').and('not.be.disabled')

})


it('Test Case 2 - Validate the Book your trip form when Round trip is selected',() => {

flightBookPage.getRoundTripRadioButton().click().should('be.checked')
   
flightBookPage.getOneWayRadioButton().should('not.be.checked')

flightBookPage.getCabinClassLabel().should('be.visible').and('have.text','Cabin Class')
flightBookPage.getCabinClassDropdown().should('be.visible')

flightBookPage.getFromLabel().should('be.visible').and('have.text','From')
flightBookPage.getFromDropdown().should('be.visible')

flightBookPage.getToLabel().should('be.visible').and('have.text', 'To')
flightBookPage.getToDropdown().should('be.visible')

flightBookPage.getDepartLabel().should('be.visible').and('have.text','Depart')
flightBookPage. getDepartDatePicker().should('not.be.disabled')

flightBookPage.getReturnLabel().should('be.visible').and('have.text','Return')
flightBookPage.getReturnDatePicker().should('be.visible').and('not.be.disabled')

flightBookPage.getNumberOfPassengersLabel().should('be.visible').and('have.text','Number of passengers')
flightBookPage.getNumberOfPassengersDropdown().should('be.visible').and('have.value', '1')
  
flightBookPage.getPassengerCategoryLabel().should('be.visible').and('have.text','Passenger 1')
flightBookPage.getPassenger1CategoryDropdown().should('be.visible').and('contain', 'Adult (16-64)')
 
flightBookPage.getBookButton().should('be.visible').and('not.be.disabled')

})


it('Test Case 3 - Validate the booking for 1 passenger and one way', () => {

flightBookPage.getOneWayRadioButton().click();
flightBookPage.getCabinClassDropdown().select('Business').should('be.visible');

flightBookPage.getFromDropdown().select('Illinois').should('be.visible');
flightBookPage.getToDropdown().select('Florida').should('be.visible');

const today = new Date();
const futureDate = new Date(today.getTime() + 7 * 24 *60 * 60 * 1000);
const formattedDate =`${('0' + (futureDate.getMonth() + 1)).slice(-2)} / ${('0' + futureDate.getDate()).slice(-2)} / ${futureDate.getFullYear()}`;

flightBookPage.getDepartDatePicker().clear().type(formattedDate);

flightBookPage.getNumberOfPassengersDropdown().invoke('val','1');

flightBookPage.getPassenger1CategoryDropdown().select('Senior (65+)').should('be.visible');

flightBookPage.getBookButton().click();
flightBookPage.getbookinginformation().should('be.visible');

})

it('Test Case 4 - Validate the booking for 1 passenger and round trip',() => {


flightBookPage.getRoundTripRadioButton().check();

flightBookPage.getCabinClassDropdown().select('First').should('be.visible');

flightBookPage.getFromDropdown().select('California').should('be.visible');

flightBookPage.getToDropdown().select('Illinois').should('be.visible');

const today = new Date();
const nextWeek = new Date(today.getTime() + 7 * 24 *60 * 60 * 1000);
const nextMonth = new Date(today.getTime() + 31 * 24 *60 * 60 * 1000);
const formattedDeparture =`${('0' + (nextWeek.getMonth() + 1)).slice(-2)} / ${('0' + nextWeek.getDate()).slice(-2)} / ${nextWeek.getFullYear()}`;
const formattedReturn = `${('0' + (nextMonth.getMonth() + 1)).slice(-2)} / ${('0' + nextMonth.getDate()).slice(-2)} / ${nextMonth.getFullYear()}`;
flightBookPage.getDepartDatePicker().clear().type(formattedDeparture,`{enter}`);
flightBookPage.getReturnDatePicker().clear().type(formattedReturn,`{enter}`)


flightBookPage.getNumberOfPassengersDropdown().invoke('val','1')

flightBookPage.getPassenger1CategoryDropdown().invoke('val','Adult (16-64)')

flightBookPage.getBookButton().click()
flightBookPage.getbookinginformation().should('be.visible')

})


it('Test Case 5 - Validate the booking for 2 passengers and one way',() => {

flightBookPage.getOneWayRadioButton().click();

flightBookPage.getCabinClassDropdown().select('Premium Economy').should('be.visible');

flightBookPage.getFromDropdown().select('New York').should('be.visible');
flightBookPage.getToDropdown().select('Texas').should('be.visible');

const today = new Date();
const futureDate = new Date(today.getTime() + 1 * 24 *60 * 60 * 1000);
const formattedDate =`${('0' + (futureDate.getMonth() + 1)).slice(-2)} / ${('0' + futureDate.getDate()).slice(-2)} / ${futureDate.getFullYear()}`;

flightBookPage.getDepartDatePicker().clear().type(formattedDate,`{enter}`);



flightBookPage.getNumberOfPassengersDropdown().select('2', { force: true })
 
 
flightBookPage.getPassenger1CategoryDropdown().select('Adult (16-64)', { force: true });
flightBookPage.getPassenger2CategoryDropdown().select('Child (2-11)', { force: true });

flightBookPage.getBookButton().click()
flightBookPage.getbookinginformation().should('be.visible')

})
});