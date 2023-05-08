class PostManage {
    
    createNewButton() {
        return cy.get(".gh-canvas").contains("New post").click();
    }


    backPost() {
        cy.go('back');
    }    
    
    validateInList(value){
        return cy.get('h3').parent(cy.get(".content-list")).contains(value)

    }

    fillTitle(value){
        const field =  cy.get(`textarea[placeholder="Post Title"]`);
        field.clear({ force: true }).type(value, { force: true });
        return this;
    }
    seeSettings(){
        return cy.get(".post-settings").click({ force: true });
    }

    btnPublish(){
        return cy.get(".view-actions").contains("Publish").click({ force: true });
    }

    backDarfPost(){
        return cy.get(".gh-nav-body").contains("Drafts").click();
    }

    btnConfirmPublish(){
        return cy.get(".gh-publishmenu-footer").contains("Publish").click({ force: true });
    }

    editPost(value){
        return cy.get(".content-list").contains(value).click({ force: true });
    }


  }
  
  module.exports = new PostManage();
  