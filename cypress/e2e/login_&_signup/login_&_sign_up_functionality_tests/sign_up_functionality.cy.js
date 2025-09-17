/// <reference types="cypress" />

import SignUpPage from "../../../pages/SignUpPage";

describe("Sign Up Form Validation – Parametrik Tests @Smoke", () => {
    beforeEach(() => {
        cy.visit("/");
        SignUpPage.getSignUpPage().click();
    });

    const baseData = {
        name: "Volkan",
        surname: "Tutunculer",
        email: "volkan@test.com",
        password: "ValidPass123",
        password_confirmation: "ValidPass123",
    };

    const testCases = [
        {
            title: "empty name",
            data: { ...baseData, name: "" },
            field: "name",
        },
        {
            title: "empty surname",
            data: { ...baseData, surname: "" },
            field: "surname",
        },
        {
            title: "empty email",
            data: { ...baseData, email: "" },
            field: "email",
        },
        {
            title: "invalid email format",
            data: { ...baseData, email: "invalidEmail" },
            field: "email",
        },
        {
            title: "empty password",
            data: { ...baseData, password: "" },
            field: "password",
        },
        {
            title: "empty password confirmation",
            data: { ...baseData, password_confirmation: "" },
            field: "password_confirmation",
        },
        {
            title: "password and confirmation mismatch",
            data: { ...baseData, password_confirmation: "DifferentPass" },
            field: "password_confirmation",
            serverValidationMessage: "Girilen değerler aynı değil.",
        },
        {
            title: "checkbox not checked",
            data: { ...baseData },
            field: "approvalCheckbox",
        },
    ];

    testCases.forEach((tc) => {
        it(`should validate: ${tc.title}`, () => {

            if (tc.field === "password_confirmation" && tc.serverValidationMessage) {
                SignUpPage.getnameInputArea().type(tc.data.name);
                SignUpPage.getsurnameInputArea().type(tc.data.surname);
                SignUpPage.getemailInputArea().type(tc.data.email);
                SignUpPage.getpasswordInputArea().type(tc.data.password);
                SignUpPage.getpasswordReEnterInputArea().type(tc.data.password_confirmation);
            } else {

                if (tc.field !== "name") SignUpPage.getnameInputArea().type(tc.data.name);
                if (tc.field !== "surname") SignUpPage.getsurnameInputArea().type(tc.data.surname);
                if (tc.field !== "email") SignUpPage.getemailInputArea().type(tc.data.email);
                if (tc.field !== "password") SignUpPage.getpasswordInputArea().type(tc.data.password);
                if (tc.field !== "password_confirmation") SignUpPage.getpasswordReEnterInputArea().type(tc.data.password_confirmation);
            }

            if (tc.field !== "approvalCheckbox") {
                SignUpPage.getApprovalLegalCheckBox().check({ force: true });
            }

            SignUpPage.getSignUpRegisterButton().click();

            if (tc.field === "approvalCheckbox") {
                SignUpPage.getApprovalLegalCheckBox().then(($el) => {
                    expect($el[0].checkValidity()).to.be.false;
                    expect($el[0].validationMessage).to.include("Please");
                });
            } else if (tc.serverValidationMessage) {
                cy.get('.text-sm')
                    .should('be.visible')
                    .and('contain.text', tc.serverValidationMessage);
            } else {

                let getField;
                if (tc.field === "name") {
                    getField = SignUpPage.getnameInputArea;
                } else if (tc.field === "surname") {
                    getField = SignUpPage.getsurnameInputArea;
                } else if (tc.field === "email") {
                    getField = SignUpPage.getemailInputArea;
                } else if (tc.field === "password") {
                    getField = SignUpPage.getpasswordInputArea;
                } else {
                    getField = SignUpPage.getpasswordReEnterInputArea;
                }

                getField().then(($el) => {
                    expect($el[0].checkValidity()).to.be.false;
                    expect($el[0].validationMessage).to.include("Please");
                });
            }
        });
    });
});