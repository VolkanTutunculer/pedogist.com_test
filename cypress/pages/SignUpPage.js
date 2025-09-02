class SignUpPage {
  getSignUpPage() {
    return cy.get('a[class*="user-btn-sign-up"]');
  }

  getloginImage() {
    return cy.get('img[class="img-fluid"]');
  }

  getleftWrapperText() {
    return cy.get('p[class*="mb-2"]');
  }

  getexpectedSignUpInfoText() {
    return "Bilgilerinizi doldurarak güvenli bir şekilde kayıt olabilirsiniz. Eğer hesabınız zaten mevcut ise buradan giriş yapabilirsiniz.";
  }

  getburadanLginButtonInText() {
    return cy.get('a[class*="cly-hover"]');
  }

  getretrunHomePageButton() {
    return cy.get('a[class*="m-0"]');
  }

  getmainSignUpText() {
    return cy.get("h3.main_question");
  }

  getlabels() {
    return cy.get("label");
  }

  getnameInputArea() {
    return cy.get('input[name="name"]')
  }

  getsurnameInputArea() {
    return cy.get('input[name="surname"]')
  }

  getemailInputArea() {
    return cy.get('input[name="email"]');
  }

  getpasswordInputArea() {
    return cy.get('input[name="password"]');
  }

  getpasswordReEnterInputArea() {
    return cy.get('input[name="password_confirmation"]');
  }

  getApprovalLegalCheckBox() {
    return cy.get('input[type="checkbox"]');
  }

  getApprovalLegalURL(){
    return cy.get("div label a");
  }

  getgoogleSignInButton() {
    return cy.get(".sign-gmail a");
  }

  getLoginPageButton() {
    return cy.get('div.d-flex a[href*="giris"]');
  }

  getSignUpRegisterButton() {
    return cy.get('button[type="submit"]');
  }
}

export default new SignUpPage();
