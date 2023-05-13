class PostManage {
    
    createNewButton() {
        return cy.get(".view-actions-top-row").contains("New post").click({ force: true });
    }

    backPost() {
        return cy.get(`a[data-test-link="posts"]`).click({ force: true });
    }    
    
    validateInList(value){
        return cy.get('p').parent(cy.get(".gh-list-row")).contains(value)
    }

    fillTitle(value){
        const field =  cy.get(`textarea[placeholder="Post title"]`);
        field.clear().type(value, { force: true });
        return this;
    }

    fillDescription(value){
        const field =  cy.get(`div[data-placeholder="Begin writing your post..."]`);
        field.clear();
        field.type(value);
    
        return this;
    }
    
    seeSettings(){
        return cy.get(`button[title="Settings"]`).click({ force: true });
        
    }

    btnPublish(){
        return cy.get(`button[data-test-button="publish-flow"]`).click({ force: true });
    }

    btnContinue(){
        return cy.get(`button[data-test-button="continue"]`).click({ force: true });
    }

    btnConfirmPublish(){
        return cy.get(`button[data-test-button="confirm-publish"]`).click({ force: true });
    }

    editPost(value){
        return cy.get(".gh-list-row").contains(value).click({ force: true });
    }

    selectFirst(){        
        return  cy.get('.gh-list-row>a').eq(1).click({ force: true })
    }

    deletePost(){        
        return  cy.get('.settings-menu-content').contains("Delete").click({ force: true })
    }
    confirmDeletePost(){        
        return  cy.get('.modal-footer').contains("Delete").click({ force: true })
    }
    btnBackEditor(){
        return cy.get(`button[data-test-button="back-to-editor"]`).click({ force: true });
    }

  }
  
  module.exports = new PostManage();
  