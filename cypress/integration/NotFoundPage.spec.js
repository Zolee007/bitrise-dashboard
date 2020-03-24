/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

function checkNotFoundPage() {
  cy.dataCy("not-found-image").should("be.visible");
  cy.dataCy("not-found-title")
    .contains("Page not found!")
    .should("be.visible");

  cy.dataCy("not-found-go-home")
    .contains("Go Home")
    .should("be.visible");
}

describe("NotFoundPage", function() {
  it("renders publicly", function() {
    cy.visit("/not-found");
    checkNotFoundPage();
    cy.dataCy("header").should("not.exist");
    cy.dataCy("footer").should("not.exist");
  });

  it("renders privately", function() {
    cy.login("testelek");
    cy.visit("/not-found");
    cy.dataCy("header").should("be.visible");
    cy.dataCy("footer").should("be.visible");
    cy.contains("testelek").should("be.visible");
    checkNotFoundPage();
  });
});
