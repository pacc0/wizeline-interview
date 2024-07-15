describe('Login page', () => {
  
  beforeEach(function () {
    cy.visit('')
    cy.fixture('login.json')
      .then((loginData) => {
        this.data = loginData
      })
  })

  it('01 - Should do user login with correct Credentials', function () {
    cy.userLogin(
      this.data.happyPath.email,
      this.data.happyPath.password
    )
  })

  it('02 - Should not do user login with incorrect Credentials', () => {
    cy.inexistentUserLogin()
  })

}) 