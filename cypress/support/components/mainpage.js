/// <reference types="cypress" />
import selectors from "/cypress/support/selectors.js";

export class MainPage {
  visitMainPage() {
    cy.visit("/");
  }

  getMainInput() {
    return cy.get(selectors.mainInput);
  }

  getNewPost(newPost) {
    return cy.contains(`${newPost}`);
  }

  getDummyPost() {
    return cy.contains(selectors.dummyPost);
  }

  getEditInput() {
    return cy.get(selectors.editInput);
  }

  getEditedPost() {
    return cy.contains(selectors.editedPost);
  }

  getDestroyBtn() {
    return cy.get(selectors.destroyBtn);
  }

  getCompletedPost() {
    return cy.get(selectors.completedPost);
  }
}

export const mainPage = new MainPage();
