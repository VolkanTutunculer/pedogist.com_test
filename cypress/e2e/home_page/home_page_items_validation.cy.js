/// <reference types="cypress" />

describe("Home Page Items Validation @Regression", () => {
    beforeEach(function () {
        cy.visit('/');
        cy.fixture('heroTexts.json').as('texts');
        cy.fixture("therapists.json").as("therapists");
        
    });

    it("HomePage URL validation", () => {
        cy.url().should("eq", "https://www.pedogist.com/");
    });

    it('Hero Sentences Validation', function () {

        cy.get('.hero-text h1')
            .invoke('text')
            .then(t => t.replace(/\s+/g, ' ').trim())
            .should('equal', this.texts.h1);

        cy.get('.hero-text h2')
            .invoke('text')
            .then(t => t.replace(/\s+/g, ' ').trim())
            .should('equal', this.texts.h2);

        cy.get('.hero-text p').each(($el, i) => {
            if (this.texts[`p${i + 1}`]) {
                cy.wrap($el)
                    .invoke('text')
                    .then(t => t.replace(/\s+/g, ' ').trim())
                    .should('equal', this.texts[`p${i + 1}`]);
            }
        });

        this.texts.ul.forEach((txt, i) => {
            cy.get('.hero-text ul li').eq(i)
                .invoke('text')
                .then(t => t.replace(/\s+/g, ' ').trim())
                .should('equal', txt);
        });
    });

    it('checks image and button', function () {
        cy.get('.hero-text img')
            .should('have.attr', 'src', 'https://www.pedogist.com/assets/img/orta-yazi.png')
            .and('have.attr', 'alt', 'Online Danışmanlık Tanıtımı');

        cy.get('.hero-text .hero-btn a')
            .should('have.attr', 'href', 'https://www.pedogist.com/secim-asistani')
            .invoke('text')
            .then(t => t.replace(/\s+/g, ' ').trim())
            .should('equal', 'Şimdi Danışmanlık Al');

    });


    //  This removed from home page
    // it("Filter Functionalty Test Each Filter Input & Reset Button ", function () {
    //     this.therapists.forEach((therapist) => {

    //         cy.get('input[name="name"]').clear().type(therapist.name);
    //         cy.get('input[name="surname"]').clear().type(therapist.surname);
    //         cy.get('select[name="service_id"]').select(therapist.serviceId);

    //         cy.get('button[type="submit"]').click();

    //         cy.get(".member-main-wrapper").first().within(() => {
    //             cy.get("h5 a")
    //                 .invoke("text")
    //                 .then(t => t.replace(/\s+/g, ' ').trim())
    //                 .should("equal", therapist.expectedName.replace(/\s+/g, ' ').trim());

    //             cy.get("span")
    //                 .invoke("text")
    //                 .then(t => t.replace(/\s+/g, ' ').trim())
    //                 .should("equal", therapist.expectedService.replace(/\s+/g, ' ').trim());
    //         });

    //         cy.get('a.btn.btn-otline-primary').click();
    //         cy.get('input[name="name"]').should("have.value", "");
    //         cy.get('input[name="surname"]').should("have.value", "");
    //         cy.get('select[name="service_id"]').should("have.value", "");
    //     });
    // });

    it("'Nasil Calisir' section picture and test validation", () => {

    })
});