class MainMenu {

  getlogo() {
    return cy.get("img[class='logo'][title*='Pedogist']");
  }

  getmenuItems() {
    return cy.get("#mobile-menu a");
  }

  getsubmenuItems() {
    return cy.get("ul.sub-menu li a");
  }

};

export default new MainMenu();
