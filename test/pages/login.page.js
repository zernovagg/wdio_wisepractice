class LoginPage {

    get username() { return $('#username')  }
    get password() { return $('#password')  }
    get loginButton() { return $('.radius') }

    async setUsernameInput(value) {
        await this.username.addValue(value)
    }

    async setPasswordInput(value) {
        await this.password.addValue(value)
    }

    async clickOnLoginBtn(value) {
        await this.loginButton.click()
    }

}
 export default new LoginPage()
