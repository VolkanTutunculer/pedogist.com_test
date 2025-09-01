class PageCommonItems {
    getpageTitle() {
        return cy.get("div[class*=hero-course] h2")
    }
}

export default new PageCommonItems();