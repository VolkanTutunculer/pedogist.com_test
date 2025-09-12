/// <reference types="cypress" />
import LoginPage from "../../../pages/LoginPage";

describe("Login Functionality Validation", { tags: ['smoke'] }, () => {
    beforeEach(() => {
        cy.visit("/");
        LoginPage.getloginPage().click();
    });

    it("Login Page URL validation", () => {
        cy.url().should("eq", "https://www.pedogist.com/giris");
    });

    [
        {
            title: "empty email",
            username: "",
            password: "InvalidPass",
            type: "html-validation",
            field: "email",
        },
        {
            title: "empty password",
            username: "InvalidUsername",
            password: "",
            type: "html-validation",
            field: "password",
        },
        {
            title: "invalid Username & Valid Password",
            username: "InvalidUsername",
            password: Cypress.env("APP_PASSWORD"),
            type: "server",
            expectedMessage: "E-Mail veya şifreniz hatalı.",
        },
        {
            title: "valid Username & Invalid Password",
            username: Cypress.env("APP_USERNAME"),
            password: "InvalidPassword",
            type: "server",
            expectedMessage: "E-Mail veya şifreniz hatalı.",
        },
        {
            title: "invalid Username & Invalid Password",
            username: "InvalidUsername",
            password: "InvalidPassword",
            type: "server",
            expectedMessage: "E-Mail veya şifreniz hatalı.",
        },
    ].forEach((tc) => {
        it(`Validate login – ${tc.title}`, () => {
            LoginPage.login(tc.username, tc.password);

            if (tc.type === "server") {
                cy.url().should("include", "giris");
                LoginPage.getErrorMessage()
                    .should("be.visible")
                    .and("contain.text", tc.expectedMessage);
            }

            if (tc.type === "html-validation") {
                const getField =
                    tc.field === "email"
                        ? LoginPage.getemailInputArea
                        : LoginPage.getpasswordInputArea;

                getField().then(($el) => {
                    expect($el[0].checkValidity()).to.be.false;
                    expect($el[0].validationMessage).to.include("Please");
                });
            }
        });

        it("should log in with valid username and password", () => {
            cy.visit("/");
            LoginPage.getloginPage().click();
            LoginPage.login(Cypress.env("APP_USERNAME"), Cypress.env("APP_PASSWORD"));

            cy.get("li[class*='user-list']").realHover();
            cy.get('label[class*="text-capital"]').should("contain.text", "Volkan Tutunculer")
        });
    });

});