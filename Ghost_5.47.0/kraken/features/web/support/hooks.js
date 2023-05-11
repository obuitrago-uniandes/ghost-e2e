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
    admin: new AdminPage(this.driver),
    page: new PageSection(this.driver),
  };

  this.loginPage = this.pages[`${this.userId}`].login;
  this.adminPage = this.pages[`${this.userId}`].admin;
  this.pageSection = this.pages[`${this.userId}`].page;
});

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
  this.loginPage = null;
  this.adminPage = null;
  this.pageSection = null;
});
