import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {

    get secureButton() {
        return $('div > button:first-child > span');
    }

    async trustAuth() {
        await this.secureButton.click();
    }

}

export default new SecurePage();
