/**
 *
 * @copyright Copyright (c) 2018-2020 Gary Kim <gary@garykim.dev>
 *
 * @author Gary Kim <gary@garykim.dev>
 *
 * @license GNU AGPL version 3 only
 *
 * SAS Powerschool Enhancement Suite - A browser extension to improve the experience of SAS Powerschool.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

'use strict';

const browser = require('webextension-polyfill');

// Installation Process
browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install' && details.temporary === false) {
        browser.runtime.openOptionsPage();
    }
});

// Listen for requests from tabs
browser.runtime.onMessage.addListener(message_recieve);
function message_recieve (message) {
    switch (message.action) {
        case "open_settings":
            browser.runtime.openOptionsPage();
            break;
        default:
            break;
    }
}


