class LoginPage {
  get loginPage() {
    return cy.get('a[class="user-btn-sign-in"]');
  }

  get loginImage() {
    return cy.get('img[class="img-fluid"]');
  }

  get leftWrapperText() {
    return cy.get('p[class*="mb-2"]');
  }

  get expectedLoginInfoText() {
    return "Bilgilerinizi doldurarak güvenli giriş yapabilirsiniz. Hala kayıt olmadıysanız buradan kayıt olabilirsiniz.";
  }

  get buradanRegisterButtonInText() {
    return cy.get('a[class*="cly-hover"]');
  }

  get retrunHomePageButton() {
    return cy.get('a[class*="m-0"]');
  }

  get mainLoginText() {
    return cy.get("h3.main_question");
  }

  get labels() {
    return cy.get("label");
  }

  get emailInputArea() {
    return cy.get('input[name="email"]');
  }

  get passwordInputArea() {
    return cy.get('input[name="password"]');
  }

  get forgetPasswordButton() {
    return cy.get("a.text-sm");
  }

  get rememberCheckBOx() {
    return cy.get('input[name="remember"]');
  }

  get googleSignInButton() {
    return cy.get(".sign-gmail a");
  }

  get registerButton() {
    return cy.get('div.d-flex a[href*="kayit"]');
  }

  get loginButton() {
    return cy.get('button[type="submit"]');
  }
}

export default new LoginPage();
