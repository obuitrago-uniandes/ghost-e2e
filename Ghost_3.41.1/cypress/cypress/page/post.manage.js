class PostManage {
    
    createNewButton() {
        return cy.get(".gh-canvas").contains("New post").click();
    }

    clickP() {
        return cy.get(".gh-viewport  ").click();
    }


    clickPost() {
        return cy.get(".f8>a").contains("Posts").click();
    }

    backPost() {
        cy.go('back');
    }    
    
    validateInList(value){
        return cy.get('h3').parent(cy.get(".content-list")).contains(value)

    }

    fillTitle(value){
        const field =  cy.get(`textarea[placeholder="Post Title"]`);
        field.clear().type(value, { force: true });
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

    selectFirst(){        
        return  cy.get('.posts-list>li>a').eq(1).click({ force: true })
    }

    deletePost(){        
        return  cy.get('.settings-menu-container').contains("Delete").click({ force: true })
    }
    confirmDeletePost(){        
        return  cy.get('.modal-footer').contains("Delete").click({ force: true })
    }
  }
  
  module.exports = new PostManage();
  