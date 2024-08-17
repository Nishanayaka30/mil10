import Builder from 'selenium-webdriver';

let driver;

async function initializeDriver() {
    driver = await new Builder().forBrowser('chrome').build();
    return driver;
}

function getDriver() {
    return driver;
}

module.exports = { initializeDriver, getDriver };
