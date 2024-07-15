class Login {

    login_email_field = "[data-qa='login-email']";
    login_password_field = "[data-qa='login-password']";
    login_button = "[data-qa='login-button']";
    login_assertion_url = Cypress.config().baseUrl; // verification that login successful
    
}
export default Login