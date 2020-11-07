class LoginPage {

    get signUpEmail () { return $("//*[@resource-id='com.fetchrewards.fetchrewards.hop:id/email_signup_button']");}
    get connectWithGoogle () { return $("//*[@resource-id='com.fetchrewards.fetchrewards.hop:id/google_sign_up_button']");}
    get connectWithFacebook () { return $("//*[@resource-id='com.fetchrewards.fetchrewards.hop:id/facebook_sign_up_button']");}
    
}

module.exports = new LoginPage();
