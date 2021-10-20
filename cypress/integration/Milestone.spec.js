/// <reference types="cypress" />
import "cypress-real-events/support";
import { MainPage } from "../support/components/mainpage";

const components = new MainPage();

describe("todo testing", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://mysterious-thicket-31854.herokuapp.com/", {
      fixture: "dummyGET",
    }).as("interGET");
    cy.visit("/");
    cy.wait("@interGET");
  });

  it("Create Element", () => {
    const newPostId = Date.now();
    components.getMainInput().type(`Test ${newPostId}{enter}`);
    components.getNewPost(newPostId);
  });

  it("Edit element", () => {
    components.getDummyPost().dblclick();
    components.getEditInput().clear().type("Edited post.{enter}");
    components.getEditedPost();
  });

  it("Delete Element", () => {
    components.getDummyPost().realHover();
    components.getDestroyBtn();
    components.getDummyPost().next().click();
    components.getDummyPost().should("not.exist");
  });

  it("Complete Task", () => {
    components.getDummyPost().prev().click();
    components.getCompletedPost();
  });
});

describe("todo testing / Completed task", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://mysterious-thicket-31854.herokuapp.com/", {
      fixture: "completedDummyGET",
    }).as("interCompletedGET");
    cy.visit("/");
    cy.wait("@interCompletedGET");
  });
  it("Clear Complete", () => {
    components.getClearCompletedBtn().click();
    components.getCompletedPost().should("not.exist");
  });

  it("Create Element", () => {
    const newPostId = Date.now();
    components.getMainInput().type(`Test ${newPostId}{enter}`);
    components.getNewPost(newPostId);
  });

  it("Edit element", () => {
    components.getDummyPost().dblclick();
    components.getCompletedEditInput().clear().type("Edited post.{enter}");
    components.getEditedPost();
  });

  it("Delete Element", () => {
    components.getDummyPost().realHover();
    components.getDestroyBtn();
    components.getDummyPost().next().click();
    components.getDummyPost().should("not.exist");
  });

  it("Uncomplete Task", () => {
    components.getDummyPost().prev().click();
    components.getCompletedPost().should("not.exist");
  });
});
