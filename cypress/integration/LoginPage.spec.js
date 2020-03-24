/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

import { checkWelcomeCard } from "../support/utils";

function checkSigninCard() {
  cy.url().should("include", "/login");
  cy.dataCy("signin-heading")
    .contains("Select user")
    .should("be.visible");
  cy.contains("ninja").should("be.visible");
  cy.dataCy("signin-login-button").should("be.visible");
}

function checkErrorPanel() {
  cy.dataCy("error-heading")
    .contains("Ooops, something went wrong!")
    .should("be.visible");
  cy.dataCy("error-button")
    .contains("Retry")
    .should("be.visible");
}

describe("LoginPage", function() {
  describe("SignInCard", function() {
    beforeEach(function() {
      cy.visit("/");
      cy.contains("ninja").as("selector");
      cy.dataCy("signin-login-button").as("login");
    });

    it("renders successfully", function() {
      checkSigninCard();
    });

    it("with invalid token, shows 'ErrorPanel'", function() {
      cy.get("@selector").type("asd");
      cy.contains("div", 'Create "asd"').click();
      cy.get("@login").click();

      checkErrorPanel();
    });

    it("with valid token, shows 'WelcomeCard'", function() {
      cy.get("@login").click();
      checkWelcomeCard();
    });
  });

  describe("WelcomeCard", function() {
    beforeEach(function() {
      cy.auth();
      cy.visit("/");
      cy.dataCy("welcome-continue-button").as("continue");
      cy.dataCy("welcome-signin-other-button").as("signinother");
    });

    it("renders successfully", function() {
      checkWelcomeCard();
    });

    it("with 'Sign-in as other', shows 'SignInCard'", function() {
      cy.get("@signinother").click();
      checkSigninCard();
    });

    it("with 'Continue', shows 'DashboardPage'", function() {
      cy.get("@continue").click();
      cy.contains("Dashboard").should("be.visible");
    });
  });
});
