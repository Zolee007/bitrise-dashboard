/// <reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("dataCy", (selector) => {
  return cy.get(`[data-cy=${selector}]`);
});

Cypress.Commands.add("auth", () => {
  cy.fixture("token").then((token) => {
    cy.window().then((w) => {
      w.localStorage.setItem("bitrise.token", token);
    });
  });
});

Cypress.Commands.add("login", (username) => {
  cy.window()
    .its("localStorage")
    .then((ls) => {
      cy.fixture("token").then((token) => {
        ls.setItem("bitrise.token", token);
      });
      cy.fixture("me").then((resp) => {
        const user = resp.data;
        user.username = username || user.username;
        ls.setItem("bitrise.user", JSON.stringify(user));
      });
    });
});

Cypress.Commands.add("logout", () => {
  cy.window()
    .its("localStorage")
    .then((ls) => {
      ls.removeItem("bitrise.user");
    });
  cy.visit("/");
});
