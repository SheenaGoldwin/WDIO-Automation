import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    get inputUsername() {
        return $("#lemail");
    }

    get inputPassword() {
        return $("#password");
    }

    get btnSubmit() {
        return $(".login-actions > button");
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('login.php');
    }
}

export default new LoginPage();