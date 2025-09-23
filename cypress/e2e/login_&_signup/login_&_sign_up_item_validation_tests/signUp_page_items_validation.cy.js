/// <reference types="cypress" />

import SignUpPage from "../../../pages/SignUpPage";


describe("Sign Up Page Items Validation @Smoke", () => {
    beforeEach(() => {
        cy.visit("/");
        SignUpPage.getSignUpPage().click();

    });

    it("Sign Up Page URL validation", () => {
        cy.url().should("eq", "https://www.pedogist.com/kayit");
    });

    describe("Left Wrapper", () => {
        it("Sign Up image validation", () => {
            SignUpPage.getloginImage()
                .should("have.attr", "src", "/assets/reg/img/login.png")
                .and("be.visible");
        });

        it("information sentence validation under sign up image", () => {
            SignUpPage.getleftWrapperText().invoke("text").then((actualText) => {
                const expectedText = SignUpPage.getexpectedSignUpInfoText();
                expect(actualText.replace(/\s+/g, " ").trim()).to.eq(expectedText);
            });
        });

        it("Intext -buradan- login button validation", () => {
            SignUpPage.getburadanLginButtonInText()
                .should("have.text", "buradan")
                .and("have.attr", "href", "https://www.pedogist.com/giris")
                .and("be.visible");
        });

        it("Return HomePage Button Validation", () => {
            SignUpPage.getretrunHomePageButton()
                .should("have.text", "Anasayfaya Dön")
                .and("have.attr", "href", "https://www.pedogist.com");
        });

        it("Return HomePage button function validation", () => {
            SignUpPage.getretrunHomePageButton().click({ force: true });

            cy.url().should("eq", "https://www.pedogist.com/");
        });
    });

    describe("Right Wrapper", () => {
        it("should display main sign up text", () => {
            SignUpPage.getmainSignUpText()
                .should("have.text", "Kayıt olmak için bilgilerinizi doldurunuz.")
                .and("be.visible");
        });

        it("should display label for name input", () => {
            SignUpPage.getlabels().contains("Adınız").should("be.visible");
        });

        it("should display label for surname input", () => {
            SignUpPage.getlabels().contains("Soyadınız").should("be.visible");
        });

        it("should display label for email input", () => {
            SignUpPage.getlabels().contains("E-Mail Adresiniz").should("be.visible");
        });


        it("should display label for password input", () => {
            SignUpPage.getlabels().contains("Şifre").should("be.visible");
        });

        it("should display label for password re-enter input", () => {
            SignUpPage.getlabels().contains("Şifrenizi Doğrulayın").should("be.visible");
        });

        it("should have name input", () => {
            SignUpPage.getnameInputArea()
                .should("exist")
                .and("be.visible")
                .and("have.attr", "type", "text")
                .and("have.attr", "required");
        });

        it("should have surname input", () => {
            SignUpPage.getsurnameInputArea()
                .should("exist")
                .and("be.visible")
                .and("have.attr", "type", "text")
                .and("have.attr", "required");
        });


        it("should have email input", () => {
            SignUpPage.getemailInputArea()
                .should("exist")
                .and("be.visible")
                .and("have.attr", "type", "email")
                .and("have.attr", "required");
        });

        it("should have password input", () => {
            SignUpPage.getpasswordInputArea()
                .should("exist")
                .and("be.visible")
                .and("have.attr", "type", "password")
                .and("have.attr", "required");
        });

        it("should have password re-enter input", () => {
            SignUpPage.getpasswordReEnterInputArea()
                .should("exist")
                .and("be.visible")
                .and("have.attr", "type", "password")
                .and("have.attr", "required");
        });

        it('should have "Kisisel Veriler" checkbox', () => {
            SignUpPage.getApprovalLegalCheckBox().should('exist')

            SignUpPage.getApprovalLegalCheckBox()
                .should("exist")
                .and("have.attr", "type", "checkbox")
                .check({ force: true });
        });

        it('should have "Kisisel Veriler" URL', () => {
            SignUpPage.getApprovalLegalURL().should('be.visible').and("have.text", "Kişisel Veriler Politikası").and("have.attr", "href", "https://www.pedogist.com/bilgilendirme/kisisel-veriler-politikasi")
        });


        it("should have Google sign up button", () => {
            SignUpPage.getgoogleSignInButton()
                .should("be.visible")
                .and("have.text", "Google")
                .and("have.attr", "href", "https://www.pedogist.com/auth/google");
        });

        it('should have "Giriş Yap" link', () => {
            SignUpPage.getLoginPageButton()
                .should("be.visible")
                .and("contain.text", "Giriş Yap")
                .and("have.attr", "href", "https://www.pedogist.com/giris");
        });

        it('should have "Kayıt Ol" submit button', () => {
            SignUpPage.getSignUpRegisterButton()
                .should("be.visible")
                .and("have.text", "Kayıt Ol");
        });
    });
});