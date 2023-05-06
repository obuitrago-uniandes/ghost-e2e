class PageManage {
    createButton() {
        return cy.get(".gh-canvas").contains("New page").click({ force: true });
    }
    titlePage() {
        return  cy.get(`textarea[placeholder="Page Title"]`).click({ force: true });
    }
    contentPage(){
        return cy.get("div[data-kg='editor-wrapper']").click({ force: true });
    }
    selectPage(value){
        return cy.contains("a[title='Edit this page']", value ).click({ force: true });
    }
    fillTitlePage(value){
        const field =  cy.get(`textarea[placeholder="Page Title"]`);
        field.clear();
        field.type(value);
    
        return this;
    }
    plusButton(){
        return cy.get("button[aria-label='Add a card']").click({ force: true });
    }
    cardHtml() {
        return cy.contains("Insert a raw HTML card").click({ force: true });
    }
    textAreaHtml() {
        return cy.get("div.CodeMirror-code").type(this.iframeHtml());
    }
    publishButton() {
        return cy.get(".view-actions").contains("Publish").click({ force: true });
    }
    publishNowButton(){
        return cy.get(".gh-publishmenu-footer").contains("Publish").click({ force: true });
    }
    settingsButton(){
        return cy.get(".post-settings").click({ force: true });
    }
    deleteButton(){
        return cy.get(".settings-menu-delete-button").click({ force: true });
    }
    confirmDeletePage(){
        return cy.get(".modal-footer").contains('Delete').click({ force: true });
    }
    searchItemPage(value,number){
        return cy.get('.gh-list-row')
            .contains(value)
            .should(($p) => {
                expect($p).to.have.length(number);
        })
    }
    iframeHtml(){
        return '<iframe width="560" height="315" src="https://www.youtube.com/embed/7X8II6J-6mU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }

  }
  
  module.exports = new PageManage();
  