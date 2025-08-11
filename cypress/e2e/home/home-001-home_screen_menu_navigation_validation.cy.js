/// <reference types="cypress" />
import MainMenu from "../../pages/MainMenu"
import { menuItemNames } from "../../support/main_menu_nav_items";
import { menuLinks } from "../../support/menu_links_and_headers";

describe('Home Page and Main Menu Navigation Functionality Validation @smoke', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Url validation', () => {
        cy.url().should('eq', 'https://www.pedogist.com/');
    });

    it('Logo validation', () => {
        MainMenu.logo
            .should('have.attr', 'src', '/assets/img/logo/logo-black.png')
            .and('be.visible');
    });

    it("Menu Validation", () => {
        MainMenu.menuItems
            .then(($elements) => {
                const actualMenuItems = [...$elements].map((el) => el.textContent);

                menuItemNames.mainMenu.forEach((expectedItem) => {
                    expect(actualMenuItems).to.include(expectedItem);
                });
            });
    });

    it("Submenu Validation", () => {
        MainMenu.submenuItems
            .then(($elements) => {
                const actualSubmenuItems = [...$elements].map((el) => el.textContent);

                menuItemNames.hizmetlerimiz.forEach((expectedItem) => {
                    expect(actualSubmenuItems).to.include(expectedItem);
                });
            });
    });

    Object.entries(menuLinks.mainMenu).forEach(([menuName, { url, header }]) => {
        it(`Validate "${menuName}" Menu Navigation`, () => {
            MainMenu.menuItems
                .contains(menuName).click();
            cy.url().should('eq', url);

            if (header) {
                cy.get("div[class*=hero-course] h2")
                    .should('have.text', header);
            }
        });
    });

    Object.entries(menuLinks.submenu).forEach(([submenuName, { url, header }]) => {
        it(`Validate "${submenuName}" Submenu Navigation`, () => {
            MainMenu.menuItems.contains('Hizmetlerimiz').trigger('mouseover').realHover();

            MainMenu.submenuItems
                .contains(submenuName).click();
            cy.url().should('eq', url);

            cy.get("div[class*=hero-course] h1")
                .should('have.text', header).and('be.visible');

        });
    });

});