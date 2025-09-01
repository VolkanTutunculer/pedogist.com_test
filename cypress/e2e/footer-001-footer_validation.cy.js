/// <reference types="cypress" />

import Footer from "../pages/Footer";
import { footerMenu } from "../support/footer_menu";
import { socialLinks } from "../support/social_links";
import PageCommonItems from "../pages/PageCommonItems";


describe('Footer Comprehensive Validation', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('footer').should('be.visible');
    });

    it('Footer logo is visible with correct src and alt attributes', () => {
        Footer.getfooterLogo
            .should('be.visible')
            .and('have.attr', 'src', 'https://www.pedogist.com/assets/img/logo/logo-black.png')
            .and('have.attr', 'alt', 'footer-logo');
    });

    it('Iyzico image is visible', () => {
        Footer.getiyxicoLogo
            .should('be.visible')
            .and(($img) => {
                expect($img.attr('src')).to.match(/^https?:\/\//);
            });
    });

    it('ETBIS verification image and link exist', () => {
        Footer.getetbisURL
            .should('have.attr', 'href')
            .and('include', 'etbis.eticaret.gov.tr');
        Footer.getetbisQR
            .should('be.visible')
            .and(($img) => {
                expect($img.attr('src')).to.match(/^data:image\/jpeg/);
            });
    });

    socialLinks.forEach(({ social, index, href, iconClass }) => {
        it(`Social media icon ${social} has correct link and is visible`, () => {
            Footer.getsocialIcons.eq(index)
                .should('have.attr', 'href', href);

            Footer.getsocialIcons.eq(index).find('i')
                .should('have.class', iconClass);
        });
    });

    footerMenu.forEach(({ title, selector, expectedLinks }) => {
        describe(`${title} menu`, () => {
            it('Menu title is visible', () => {
                Footer.footerMenuTitle(selector).should('be.visible').and('have.text', title);
            });

            it('All links have correct href and visible text', () => {
                Footer.getfooterMenuItems(selector).should('have.length', expectedLinks.length);

                expectedLinks.forEach(({ text, href }, i) => {
                    Footer.footerMenuItems(selector).eq(i).should('have.text', text).and('have.attr', 'href', href);
                });
            });

            it('All link have to corrent page', () => {
                expectedLinks.forEach(({ h2 }, i) => {
                    Footer.footerMenuItems(selector).eq(i).click();
                    PageCommonItems.pageTitle.should('have.text', h2);
                    cy.go('back');
                });
            })
        });
    });

    it('Warning text is present and visible', () => {
        Footer.getfooterWarningMessage
            .should('be.visible')
            .and('contain.text', 'Eğer kriz anında olduğunuzu ya da başka bir kişinin tehlikede olduğunu düşünüyorsanız');
    });
});
