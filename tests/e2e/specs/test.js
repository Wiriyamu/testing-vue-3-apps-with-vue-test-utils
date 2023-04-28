// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

function testForm(browser) {
  browser
      .waitForElementVisible('#app')
      .expect.element('#app > div').text.to.equal('Count: 0. Count is even.')

  browser
      .useXpath()
      .click("//button[text()='Click']")
      .useCss()
      .expect.element('#app > div').text.to.equal('Count: 1. Count is odd.')

  browser
      .useXpath()
      .click("//button[text()='Click']")
      .useCss()
      .expect.element('#app > div').text.to.equal('Count: 2. Count is even.')
}

module.exports = {
  'default form interactivity': browser => {
    browser.init()

    testForm(browser);

    browser.expect.element('#pid').text.to.equal('PostID:')

  },

  'post abc interactivity': browser => {
    browser
      .init()
      .url("http://localhost:8080/abc")

    testForm(browser);

    browser.useCss().expect.element('#pid').text.to.equal('PostID: abc')
  },
}
