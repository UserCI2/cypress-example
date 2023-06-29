import {slowCypressDown} from "cypress-slow-down";

slowCypressDown();

describe('Should login success spec', () => {
    it('Login via api', () => {
        cy.visit('https://magento.softwaretestingboard.com');
        console.log("I am url")
        console.log(cy.url());
        cy.reload();
        cy.login();
        cy.wait(12000);
    })
})