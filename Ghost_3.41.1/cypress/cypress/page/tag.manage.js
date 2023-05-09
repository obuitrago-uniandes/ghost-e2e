class TagManage {
    
    createNewButton() {
        return cy.get(".gh-canvas").contains("New tag").click({ force: true });
    }

    saveTag() {
        return cy.get(".gh-canvas").contains("Save").click({ force: true });
    }
    
    validateError() {
        return cy.get('p').parent('span.error').should('contain', 'You must specify a name for the tag.')

    }

    fillSlugTag(value){
        const field =  cy.get(`input[name="slug"]`);
        field.clear();
        field.type(value);
    
        return this;
    }

    fillDescripcionTag(value){
        const field =  cy.get(`textarea[name="description"]`);
        field.clear();
        field.type(value);
    
        return this;
    }

    maxCharacterError(){       
        //falta
        //return cy.get(`textarea[name="description"]`).value.lenght

    }

    fillNameTag(value){
        const field =  cy.get(`input[name="name"]`);
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
  