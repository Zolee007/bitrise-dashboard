/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const checkWelcomeCard = () => {
  cy.url().should("include", "/login");
  cy.dataCy("welcome-user-name")
    .contains("ninja")
    .should("be.visible");
  cy.dataCy("welcome-heading")
    .contains("Welcome back!")
    .should("be.visible");
  cy.dataCy("welcome-continue-button")
    .contains("Continue")
    .should("be.visible");
  cy.dataCy("welcome-not-you")
    .contains("Not ninja?")
    .should("be.visible");
  cy.dataCy("welcome-signin-other-button")
    .contains("Sign-in as other")
    .should("be.visible");
};
