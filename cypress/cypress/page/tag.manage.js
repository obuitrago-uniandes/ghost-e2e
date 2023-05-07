class TagManage {
    
    createNewButton() {
        return cy.get(".gh-canvas").contains("New tag").click({ force: true });
    }

    saveTag() {
        return cy.get(`button[data-test-button="save"]`).click({ force: true });
    }
    
    validateError() {
        return cy.get('p').parent('span.error').should('contain', 'You must specify a name for the tag.')

    }

    fillSlugTag(value){
        const field =  cy.get(`input[data-test-input="tag-slug"]`);
        field.clear();
        field.type(value);
    
        return this;
    }

    fillDescripcionTag(value){
        const field =  cy.get(`textarea[data-test-input="tag-description"]`);
        field.clear();
        field.type(value);
    
        return this;
    }

    maxCharacterError(){       
        return cy.get('p').parent(`div[class="form-group no-margin error"]`).should('contain', 'Description cannot be longer than 500 characters.')

    }

    fillNameTag(value){
        const field =  cy.get(`input[data-test-input="tag-name"]`);
        field.type(value);    
        return this;
    }
        
    deleteCharaters(value){
        return  cy.get(`input[name="slug"]`).should('not.have.value',value)
    }

    validateSlug(value){
        return  cy.get('p').parent(cy.get(`input[name="slug"]`)).contains(value)
    }


  }
  
  module.exports = new TagManage();
  