/// <reference types="cypress" />

import LoginPage from "../../pages/LoginPage";

describe("Login Page Items Validation", () => {
    beforeEach(() => {
        cy.visit("/");
        LoginPage.getloginPage.click();
    });

    it("Login Page URL validation", () => {
        cy.url().should("eq", "https://www.pedogist.com/giris");
    });

    describe("Left Wrapper", () => {
        it("Login image validation", () => {
            LoginPage.getloginImage
                .should("have.attr", "src", "/assets/reg/img/login.png")
                .and("be.visible");
        });

        it("information sentence validation under login image", () => {
            LoginPage.getleftWrapperText.invoke("text").then((actualText) => {
                const expectedText = LoginPage.expectedLoginInfoText;
                expect(actualText.replace(/\s+/g, " ").trim()).to.eq(expectedText);
            });
        });

        it("Intext -buradan- register button validation", () => {
            LoginPage.getburadanRegisterButtonInText
                .should("have.text", "buradan")
                .and("have.attr", "href", "https://www.pedogist.com/kayit")
                .and("be.visible");
        });

        it("Return HomePage Button Validation", () => {
            LoginPage.getretrunHomePageButton
                .should("have.text", "Anasayfaya Dön")
                .and("have.attr", "href", "/");
        });

        it("Return HomePage button function validation", () => {
            LoginPage.getretrunHomePageButton.click({ force: true });

            cy.url().should("eq", "https://www.pedogist.com/");
        });
    });

    describe("Right Wrapper", () => {
        it("should display main login text", () => {
            LoginPage.getmainLoginText
                .should("have.text", "Giriş yapmak için bilgilerinizi doldurunuz.")
                .and("be.visible");
        });

        it("should display label for email input", () => {
            LoginPage.getlabels.contains("E-Mail Adresiniz").should("be.visible");
        });

        it("should have email input", () => {
            LoginPage.getemailInputArea
                .should("exist")
                .and("be.visible")
                .and("have.attr", "type", "text")
                .and("have.attr", "required");
        });

        it("should display label for password input", () => {
            LoginPage.getlabels.contains("Şifreniz").should("be.visible");
        });
        it("should have password input", () => {
            LoginPage.getpasswordInputArea
                .should("exist")
                .and("be.visible")
                .and("have.attr", "type", "password")
                .and("have.attr", "required");
        });

        it('should have "Şifremi Unuttum?" link', () => {
            LoginPage.getforgetPasswordButton
                .should("be.visible")
                .and("have.text", "Şifremi Unuttum?")
                .and("have.attr", "href", "https://www.pedogist.com/sifremi-unuttum");
        });

        it('should have "Beni Hatırla" checkbox', () => {
            cy.get('.container_check .checkmark').should('be.visible')

            LoginPage.getrememberCheckBOx
                .should("exist")
                .and("have.attr", "type", "checkbox")
                .check({ force: true });
        });

        it("should have Google login button", () => {
            LoginPage.getgoogleSignInButton
                .should("be.visible")
                .and("have.text", "Google")
                .and("have.attr", "href", "https://www.pedogist.com/auth/google");
        });

        it('should have "Kayıt Ol" link', () => {
            LoginPage.getregisterButton
                .should("be.visible")
                .and("contain.text", "Kayıt Ol")
                .and("have.attr", "href", "https://www.pedogist.com/kayit");
        });

        it('should have "Giriş Yap" submit button', () => {
            LoginPage.getloginButton
                .should("be.visible")
                .and("have.text", "Giriş Yap");
        });
    });
});
