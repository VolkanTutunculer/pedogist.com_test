class Footer {

    get footerLogo() {
        return cy.get('footer .footer-img img');
    }

    get iyxicoLogo() {
        return cy.get('footer .iyzico img');
    }

    get etbisQR() {
        return cy.get('#ETBIS img');
    }

    get etbisURL() {
        return cy.get('#ETBIS a')
    }

    get socialIcons() {
        return cy.get('footer .footer-icon a')
    }

    footerMenuTitle(selector) {
        return cy.get(`footer ${selector} h3`)
    }

    footerMenuItems(selector) {
        return cy.get(`footer ${selector} ul li a`)
    }

    get footerWarningMessage() {
        return cy.get('footer center')
    }

}

export default new Footer();