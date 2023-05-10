class ScreenShots {
  indexScenario = 0;
  indexStep = 1;

  incrementIndexScenario(){
    this.indexScenario += 1;
  }
  incrementIndexStep(){
    this.indexStep += 1;
  }
  resetIndexScenario(){
    this.incrementIndexScenario = 1;
  }
  resetIndexStep(){
    this.indexStep = 1;
  }
  screenShot(){
    const filename =  `scenario_${this.indexScenario}/step_${this.indexStep}` 
    cy.screenshot(filename)
    this.indexStep += 1;
  }
}

module.exports = new ScreenShots();
