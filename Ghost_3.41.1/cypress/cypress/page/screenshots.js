class ScreenShots {
  indexScenario = 0;
  indexStep = 1;

  incrementIndexScenario() {
    this.indexScenario += 1;
    this.indexStep = 1;
  }
  incrementIndexStep() {
    this.indexStep += 1;
  }
  screenShot() {
    const filename = `scenario_${this.indexScenario}/step_${this.indexStep}`;
    cy.screenshot(filename, { overwrite: true });
    this.indexStep += 1;
  }
}

module.exports = new ScreenShots();
