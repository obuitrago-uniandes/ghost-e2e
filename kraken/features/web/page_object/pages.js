class Pages {
  constructor() {
    this.pages = {};
  }

  addPage(page, userId) {
    this.pages[userId] = page;
  }
  getPage(userId) {
    this.pages[userId];
  }
}
module.exports = new Pages();
