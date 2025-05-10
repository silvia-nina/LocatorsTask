
const { I } = inject();
// Add in your custom step files
const main_page = require("../pages/main_page");

Given('I have a defined step', () => {
  // TODO: replace with your own step
    I.amOnPage('/');

});
When(/^I click on login button$/, function () {
    I.click(main_page.loginBtn);
});
When(/^I fill email$/, function () {
    I.fillField(main_page.emailField,'test@testing65.com');
});
When(/^I fill password$/, function () {
    I.fillField(main_page.password,'12345');
});
When(/^I click on Login button$/, function () {
    I.click(main_page.login2Btn);
});
Then(/^The home page should be displayed$/, function () {
    I.waitForVisible(main_page.logo2Img);
});