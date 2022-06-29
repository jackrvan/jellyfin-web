const {Builder, By, until, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome')

const width = 640
const height = 480


let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(
        new chrome.Options().headless().windowSize({ width, height })
    )
    .build();

driver
    .get('http://192.168.1.14:8080/')
    .then(function() {
            return driver.wait(until.elementLocated(By.name("btnAddServer")), 20000)
            .then((_) =>
                driver.findElement(By.name("btnAddServer")).click()
            );
        }
    )
    .then(function() {
        return driver.wait(until.elementLocated(By.name("txtServerHost")), 20000)
        .then((_) =>
            driver.findElement(By.name("txtServerHost")).sendKeys('1.1.1.1:8096', Key.RETURN)
        )
    })
    .then((_) =>
        driver.quit()
    )
