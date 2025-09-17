/// <reference types="cypress" />
import MainMenu from "../pages/MainMenu"
import { menuItemNames } from "../support/main_menu_nav_items";
import { menuLinks } from "../support/menu_links_and_headers";

describe('Home Page and Main Menu Navigation Functionality Validation @Regression', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Url validation', () => {
        cy.url().should('eq', 'https://www.pedogist.com/');
    });

    it.only('Logo validation', () => {
        MainMenu.getlogo()
            .should('be.visible')
            .and('have.attr', 'src')
            .and('include', '/assets/img/logo/logo-black.png');
    });

    it("Menu Validation", () => {
        MainMenu.getmenuItems()
            .then(($elements) => {
                const actualMenuItems = [...$elements].map((el) => el.textContent);

                menuItemNames.mainMenu.forEach((expectedItem) => {
                    expect(actualMenuItems).to.include(expectedItem);
                });
            });
    });

    it("Submenu Validation", () => {
        MainMenu.getsubmenuItems()
            .then(($elements) => {
                const actualSubmenuItems = [...$elements].map((el) => el.textContent);

                menuItemNames.hizmetlerimiz.forEach((expectedItem) => {
                    expect(actualSubmenuItems).to.include(expectedItem);
                });
            });
    });

    Object.entries(menuLinks.mainMenu).forEach(([menuName, { url, header }]) => {
        it(`Validate "${menuName}" Menu Navigation`, () => {
            MainMenu.getmenuItems()
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
            MainMenu.getmenuItems().contains('Hizmetlerimiz').trigger('mouseover').realHover();

            MainMenu.getsubmenuItems()
                .contains(submenuName).click();
            cy.url().should('eq', url);

            cy.get("div[class*=hero-course] h1")
                .should('have.text', header).and('be.visible');

        });
    });

});