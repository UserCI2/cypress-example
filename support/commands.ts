// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import Chainable = Cypress.Chainable;

const dotEnv = require('dotenv')
dotEnv.config();
require('@cypress/xpath');
// function login() {
//     const types = {
//         user: {
//             username: 'abidas33',
//             password: '16041998vLl*'
//         }
//     }
//     const user = types.user;
//     cy.request({
//         method: 'POST',
//         failOnStatusCode: false,
//         url: "https://magento.softwaretestingboard.com/customer/account/loginPost",
//         body: {
//             "login[username]": "vladislavbondarev708@gmail.com",
//             "login[password]": "16041998vLl*"
//         }
//     }).then((body) => {
//
//     })
// }

/**
 * @memberof cy
 * @method login
 */
Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        failOnStatusCode: true,
        url: "/customer/account/loginPost",
        form: true,
        body: {
            "login[username]": "vladislavbondarev708@gmail.com",
            "login[password]": "16041998vLl*"
        }
    }).then((body) => {
        console.log(body);
    })
})
Cypress.on('uncaught:exception', (error, runnable) => {
    return false
})
module.exports = (on, config) => {
    on('task', {
        'clearDb': () => console.log('clearing db')
    })
}
