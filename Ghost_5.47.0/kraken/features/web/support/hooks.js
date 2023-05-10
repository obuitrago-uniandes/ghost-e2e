const { After, Before, BeforeAll } = require("@cucumber/cucumber");
const { WebClient } = require("kraken-node");
const LoginPage = require("../page_object/login.page");
const AdminPage = require("../page_object/admin.page");
const GeneralAdminPage = require("../page_object/general.admin.page");
const PrincipalPage = require("../page_object/principal.page");
const TagAdminPage = require("../page_object/tag.admin.page");
const PostAdminPage = require('../page_object/post.admin.page');
const RegistrationPage = require("../page_object/registration.page");
const PageSection = require("../page_object/page.section");
const NavigationAdminPage = require("../page_object/navigation.admin.page");

Before(async function () {
  this.deviceClient = new WebClient("chrome", {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  this.pages = this.pages ? this.pages : {};
  this.pages[`${this.userId}`] = {
    login: new LoginPage(this.driver),
    registration: new RegistrationPage(this.driver),
    admin: new AdminPage(this.driver),
    generalAdmin: new GeneralAdminPage(this.driver),
    principal: new PrincipalPage(this.driver),
    navigationAdmin: new NavigationAdminPage(this.driver),
    tagAdmin: new TagAdminPage(this.driver),
    postAdmin: new PostAdminPage(this.driver),
    page: new PageSection(this.driver),
  };

  this.loginPage = this.pages[`${this.userId}`].login;
  this.registrationPage = this.pages[`${this.userId}`].registration;
  this.adminPage = this.pages[`${this.userId}`].admin;
  this.generalAdminPage = this.pages[`${this.userId}`].generalAdmin;
  this.principalPage = this.pages[`${this.userId}`].principal;
  this.navigationAdminPage = this.pages[`${this.userId}`].navigationAdmin;
  this.tagAdminPage = this.pages[`${this.userId}`].tagAdmin;
  this.postAdminPage = this.pages[`${this.userId}`].postAdmin;
  this.pageSection = this.pages[`${this.userId}`].page;
});

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
  this.loginPage = null;
  this.registrationPage = null;
  this.adminPage = null;
  this.generalAdminPage = null;
  this.principalPage = null;
  this.navigationAdminPage = null;
  this.pageSection = null;
});
