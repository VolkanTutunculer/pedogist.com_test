/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage";

describe("Login Validation", () => {
    beforeEach(() => {
        cy.visit("/");
        LoginPage.loginPage.click();
    });

    it("Login Page URL validation", () => {
        cy.url().should("eq", "https://www.pedogist.com/giris");
    });

    describe("Left Wrapper", () => {
        it("Login image validation", () => {
            LoginPage.loginImage
                .should("have.attr", "src", "/assets/reg/img/login.png")
                .and("be.visible");
        });

        it("information sentence validation under login image", () => {
            LoginPage.leftWrapperText.invoke("text").then((actualText) => {
                const expectedText = LoginPage.expectedLoginInfoText;
                expect(actualText.replace(/\s+/g, " ").trim()).to.eq(expectedText);
            });
        });

        it("Intext -buradan- register button validation", () => {
            LoginPage.buradanRegisterButtonInText
                .should("have.text", "buradan")
                .and("have.attr", "href", "https://www.pedogist.com/kayit")
                .and("be.visible");
        });

        it("Return HomePage Button Validation", () => {
            LoginPage.retrunHomePageButton
                .should("have.text", "Anasayfaya Dön")
                .and("have.attr", "href", "/");
        });

        it("Return HomePage button function validation", () => {
            LoginPage.retrunHomePageButton.click({ force: true });

            cy.url().should("eq", "https://www.pedogist.com/");
        });
    });

    describe("Right Wrapper", () => {
        it("should display main login text", () => {
            LoginPage.mainLoginText
                .should("have.text", "Giriş yapmak için bilgilerinizi doldurunuz.")
                .and("be.visible");
        });

        it("should display label for email input", () => {
            LoginPage.labels.contains("E-Mail Adresiniz").should("be.visible");
        });

        it("should have email input", () => {
            LoginPage.emailInputArea
                .should("exist")
                .and("be.visible")
                .and("have.attr", "type", "text")
                .and("have.attr", "required");
        });

        it("should display label for password input", () => {
            LoginPage.labels.contains("Şifreniz").should("be.visible");
        });
        it("should have password input", () => {
            LoginPage.passwordInputArea
                .should("exist")
                .and("be.visible")
                .and("have.attr", "type", "password")
                .and("have.attr", "required");
        });

        it('should have "Şifremi Unuttum?" link', () => {
            LoginPage.forgetPasswordButton
                .should("be.visible")
                .and("have.text", "Şifremi Unuttum?")
                .and("have.attr", "href", "https://www.pedogist.com/sifremi-unuttum");
        });

        it('should have "Beni Hatırla" checkbox', () => {
            cy.get('.container_check .checkmark').should('be.visible')

            LoginPage.rememberCheckBOx
                .should("exist")
                .and("have.attr", "type", "checkbox")
                .check({ force: true });
        });

        it("should have Google login button", () => {
            LoginPage.googleSignInButton
                .should("be.visible")
                .and("have.text", "Google")
                .and("have.attr", "href", "https://www.pedogist.com/auth/google");
        });

        it('should have "Kayıt Ol" link', () => {
            LoginPage.registerButton
                .should("be.visible")
                .and("contain.text", "Kayıt Ol")
                .and("have.attr", "href", "https://www.pedogist.com/kayit");
        });

        it('should have "Giriş Yap" submit button', () => {
            LoginPage.loginButton
                .should("be.visible")
                .and("have.text", "Giriş Yap");
        });
    });
});
