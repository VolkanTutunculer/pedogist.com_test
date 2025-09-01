class Footer {

    getfooterLogo() {
        return cy.get('footer .footer-img img');
    }

    getiyxicoLogo() {
        return cy.get('footer .iyzico img');
    }

    getetbisQR() {
        return cy.get('#ETBIS img');
    }

    getetbisURL() {
        return cy.get('#ETBIS a')
    }

    getsocialIcons() {
        return cy.get('footer .footer-icon a')
    }

    footerMenuTitle(selector) {
        return cy.get(`footer ${selector} h3`)
    }

    footerMenuItems(selector) {
        return cy.get(`footer ${selector} ul li a`)
    }

    getfooterWarningMessage() {
        return cy.get('footer center')
    }

}

export default new Footer();