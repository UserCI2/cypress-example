import {slowCypressDown} from "cypress-slow-down";
import {faker} from "@faker-js/faker";

slowCypressDown();

describe('Should register success spec', () => {

    it('When I fill data', () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.wait(8000);
        cy.reload();
        const password = faker.internet.password({length: 16});
        cy.get('[href*="create"]').click({multiple: true, force: true});
        cy.get('[id="firstname"]').type(faker.person.firstName('male'));
        cy.get('[id="lastname"]').type(faker.person.lastName('male'));
        cy.get('[id="email_address"]').type(faker.person.firstName('male') + faker.person.lastName('male') + "@gmail.com");
        cy.get('[id="password"]').type(password);
        cy.get('[name="password_confirmation"]').type(password);
        cy.get('[title="Create an Account"]').click();
        cy.get('[role="alert"] [data-bind*="html"]').should('include.text', 'Thank you for registering with Main Website Store.')
    });
})