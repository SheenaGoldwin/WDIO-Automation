import { $ } from '@wdio/globals'
import Page from './page.js';

class DashboardPage extends Page {

    get infoLogo() {
        return $("#MY_INFO");
    }

}

export default new DashboardPage();