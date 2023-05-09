class PostManage {
    
    createNewButton() {
        return cy.get(".gh-canvas").contains("New post").click({ force: true });
    }

    backPost() {
        return cy.get(`a[href="#/posts/"]`).click({ force: true });
    }
    
    validateInList(value){
        return cy.get('h3').parent(cy.get(".content-list")).contains(value)

        
    }
    fillTitle(value){
        const field =  cy.get(`textarea[placeholder="Post title"]`);
        field.type(value);    
        return this;
    }

    fillDescription(value){
        const field =  cy.get(`div[data-placeholder="Begin writing your post..."]`);
        field.clear();
        field.type(value);
    
        return this;
    }

    btnPublish(){
        //return cy.get(`button[data-test-button="publish-flow"]`).click({ force: true });
    }

    btnConfirmPublish(){
        //return cy.get(`button[data-test-button="confirm-publish"]`).click({ force: true });
    }

    editPost(value){
        return cy.get(".content-list").contains(value).click({ force: true });
    }


  }
  
  module.exports = new PostManage();
  