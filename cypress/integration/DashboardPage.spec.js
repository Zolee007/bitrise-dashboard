/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

import { checkWelcomeCard } from "../support/utils";

function checkHeader() {
  cy.dataCy("header").should("be.visible");
  cy.dataCy("header-logo").should("be.visible");

  cy.dataCy("header-menuitem")
    .should("have.length", 2)
    .should("contain", "Dashboard")
    .should("contain", "Integration");

  cy.dataCy("header-userinfo").should("be.visible");
  cy.dataCy("userinfo-avatar").should("be.visible");
  cy.dataCy("userinfo-username")
    .contains("ninja")
    .should("be.visible");
  cy.dataCy("header-logout-button");
}

function checkFooter() {
  cy.dataCy("footer").should("be.visible");
  cy.dataCy("footer-copyright")
    .contains("Zoltan Szabo")
    .should("be.visible");
}

function checkContent() {
  cy.dataCy("content").should("be.visible");
  cy.dataCy("organization-list")
    .contains("Choose organization")
    .should("be.visible");
  cy.dataCy("app-list")
    .contains("Apps")
    .should("be.visible");
  cy.dataCy("build-list")
    .contains("Builds")
    .should("be.visible");
}

describe("DashboardPage", function() {
  beforeEach(function() {
    cy.login();
    cy.visit("/");
  });

  it("renders successfully", function() {
    checkHeader();
    checkContent();
    checkFooter();
  });

  it("on logout, shows 'WelcomeCard'", function() {
    cy.logout();
    checkWelcomeCard();
  });
});
