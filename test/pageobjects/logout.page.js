import { $ } from '@wdio/globals'
import Page from './page.js';

class LogoutPage extends Page {

    get avatarElement() {
        return $("div[style='display: inline-block;'] > button > div");
    }

    get logoutButton() {
        return $("div.fab-MenuList__scrollContainer > div:nth-child(3)");
    }

    get afterLogoutPageElement() {
        return $("h3");
    }

    async logout() {
        await this.avatarElement.click();
        await this.logoutButton.click();
    }

}

export default new LogoutPage();