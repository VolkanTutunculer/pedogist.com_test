class PageCommonItems {
    getpageTitle() {
        return cy.get(".hero-course-1-text h2")
    }
}

export default new PageCommonItems();