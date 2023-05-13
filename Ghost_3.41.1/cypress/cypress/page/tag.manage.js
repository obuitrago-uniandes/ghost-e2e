class TagManage {
    
    createNewButton() {
        return cy.get(".gh-canvas").contains("New tag").click({ force: true });
    }

    saveTag() {
        return cy.get(".gh-canvas").contains("Save").click();
    }
    
    clickSaveTag() {
        return cy.get(".view-actions").contains("Save").click({ force: true });
    }
    
    validateError() {
        return cy.get('p').parent('span.error').should('contain', 'You must specify a name for the tag.')

    }

    fillSlugTag(value){
        const field =  cy.get('#tag-slug');
        field.clear({ force: true }).type(value, { force: true });

        return this;
    }

    fillDescripcionTag(value){
        const field =  cy.get('#tag-description').type(value, { force: true });
    
        return this;
    }

    maxCharacterError(){       
        return cy.get('#tag-description').should('not.have.length', 500)

    }

    fillNameTag(value){
        const field =  cy.get('#tag-name');
        field.clear({ force: true }).type(value, { force: true });
        return this;
    }
        
    deleteCharaters(value){
        return  cy.get('#tag-slug').should('have.value',value)
    }

    validateSlug(value){
        return  cy.get('p').contains(value)
    }
    openTag(value){
        return  cy.get('.content-list').contains(value).click();
    }
    irTag(){
        return  cy.get('.gh-nav-top').contains('Tags').click();
    }

  }
  
  module.exports = new TagManage();
  