const faker = require("faker");
class SignUpPage {

    get firstName () { return $("//*[@resource-id='com.fetchrewards.fetchrewards.hop:id/tiet_signup_name']");}
    get lastName () { return $("//*[@resource-id='com.fetchrewards.fetchrewards.hop:id/tiet_signup_last_name']");}
    get email () { return $("//*[@resource-id='com.fetchrewards.fetchrewards.hop:id/tiet_signup_email']");}
    get confirmEmail () { return $("//*[@resource-id='com.fetchrewards.fetchrewards.hop:id/tiet_signup_email_confirm']");}
    get password () { return $("//*[@resource-id='com.fetchrewards.fetchrewards.hop:id/tiet_signup_password']");}
    get signUp () { return $("//*[@resource-id='com.fetchrewards.fetchrewards.hop:id/sign_up_button']");}
    get alertTitle () { return $("//*[@resource-id='com.fetchrewards.fetchrewards.hop:id/alertTitle']");}
    

    createNewAccount () {
        var randomEmail = faker.internet.email();

        this.firstName.setValue(faker.name.firstName());
        this.lastName.setValue(faker.name.lastName());
        this.email.setValue(randomEmail);
        this.confirmEmail.setValue(randomEmail);
        this.password.setValue(faker.internet.password());
        this.signUp.click();
    }
}

module.exports = new SignUpPage();
