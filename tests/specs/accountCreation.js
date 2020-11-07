
const { expect } = require("chai");
const LoginPage = require("../pageobjects/login.page");
const SignUpPage = require("../pageobjects/signup.page");

describe("My Fetch Rewards Home Screen", () => {
    it("should be able to sign up with valid information", () => {
        LoginPage.signUpEmail.click();
        SignUpPage.createNewAccount();
        SignUpPage.alertTitle.waitForDisplayed();
        var alertText = SignUpPage.alertTitle.getText();
        //expect(alertText).to.be.equal("Oops!");
        expect(alertText).to.contain("Welcome");
    });
});


