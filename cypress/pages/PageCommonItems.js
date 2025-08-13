class PageCommonItems {
    get pageTitle() {
        return cy.get("div[class*=hero-course] h2")
    }
}

export default new PageCommonItems();