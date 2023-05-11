const { After, Before, BeforeAll } = require("@cucumber/cucumber");
const { WebClient } = require("kraken-node");
const LoginPage = require("../page_object/login.page");
const AdminPage = require("../page_object/admin.page");
const PrincipalPage = require("../page_object/principal.page");
const PageSection = require("../page_object/page.section");
const NavigationAdminPage = require("../page_object/navigation.admin.page");
const RegistrationPage = require("../page_object/registration.page");

Before(async function () {
  this.deviceClient = new WebClient("chrome", {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  this.pages = this.pages ? this.pages : {};
  this.pages[`${this.userId}`] = {
    login: new LoginPage(this.driver),
    admin: new AdminPage(this.driver),
    page: new PageSection(this.driver),
    navigationAdmin: new NavigationAdminPage(this.driver),
    principal: new PrincipalPage(this.driver),
    registration: new RegistrationPage(this.driver),
  };

  this.loginPage = this.pages[`${this.userId}`].login;
  this.adminPage = this.pages[`${this.userId}`].admin;
  this.pageSection = this.pages[`${this.userId}`].page;
  this.navigationAdminPage = this.pages[`${this.userId}`].navigationAdmin;
  this.principalPage = this.pages[`${this.userId}`].principal;
  this.registrationPage = this.pages[`${this.userId}`].registration;
});

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
  this.loginPage = null;
  this.adminPage = null;
  this.pageSection = null;
  this.principalPage = null;
  this.navigationAdminPage = null;
  this.registrationPage = null;
});
