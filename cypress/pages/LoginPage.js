class LoginPage {
  getloginPage() {
    return cy.get('a[class="user-btn-sign-in"]');
  }

  getloginImage() {
    return cy.get('img[class="img-fluid"]');
  }

  getleftWrapperText() {
    return cy.get('p[class*="mb-2"]');
  }

  getexpectedLoginInfoText() {
    return "Bilgilerinizi doldurarak güvenli giriş yapabilirsiniz. Hala kayıt olmadıysanız buradan kayıt olabilirsiniz.";
  }

  getburadanRegisterButtonInText() {
    return cy.get('a[class*="cly-hover"]');
  }

  getretrunHomePageButton() {
    return cy.get('a[class*="m-0"]');
  }

  getmainLoginText() {
    return cy.get("h3.main_question");
  }

  getlabels() {
    return cy.get("label");
  }

  getemailInputArea() {
    return cy.get('input[name="email"]');
  }

  getpasswordInputArea() {
    return cy.get('input[name="password"]');
  }

  getforgetPasswordButton() {
    return cy.get("a.text-sm");
  }

  getrememberCheckBOx() {
    return cy.get('input[name="remember"]');
  }

  getgoogleSignInButton() {
    return cy.get(".sign-gmail a");
  }

  getregisterButton() {
    return cy.get('div.d-flex a[href*="kayit"]');
  }

  getloginButton() {
    return cy.get('button[type="submit"]');
  }

  getErrorMessage(){
    return cy.get("span.text-danger");
  }

  enterUsername(username) {
    if (username) this.getemailInputArea().type(username);
  }

  enterPassword(password) {
    if (password) this.getpasswordInputArea().type(password);
  }

  clikLoginButton() {
    this.getloginButton().click();
  }

  login(username, password, click = true) {
    this.enterUsername(username);
    if (click) {
      this.enterPassword(password);
      this.clikLoginButton();
    }
    else this.getpasswordInputArea().type(`${password}{enter}`);
  }
}

export default new LoginPage();
