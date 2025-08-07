/// <reference types="cypress" />

import { menuItems } from "../../support/main_menu_nav_items";

describe('Home Page and Main Menu Navigation Functionality Validation', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Url validation', () => {
        cy.url().should('include', 'pedogist');
    });

    it('Logo validation', () => {
        cy.get("img[class='logo'][title*='Pedogist']")
            .should('have.attr', 'src', '/assets/img/logo/logo-black.png')
            .and('be.visible');
    });

    it("Menu Validation", () => {
        cy.get("#mobile-menu a").then(($elements) => {
            const actualMenuItems = [...$elements].map((el) => el.textContent);

            menuItems.mainMenu.forEach((expectedItem) => {
                expect(actualMenuItems).to.include(expectedItem);
            });
        });
    });

    it("Submenu Validation", () => {
        cy.get("ul[class='sub-menu'] li a").then(($elements) => {
            const actualSubmenuItems = [...$elements].map((el) => el.textContent);

            menuItems.hizmetlerimiz.forEach((expectedItem) => {
                expect(actualSubmenuItems).to.include(expectedItem);
            });
        });
    });


});