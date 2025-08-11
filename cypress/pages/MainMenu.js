class MainMenu {

  get logo() {
    return cy.get("img[class='logo'][title*='Pedogist']");
  }

  get menuItems() {
    return cy.get("#mobile-menu a");
  }

  get submenuItems() {
    return cy.get("ul.sub-menu li a");
  }

};

export default new MainMenu();
