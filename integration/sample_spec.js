/// <reference types="cypress" />
import "cypress-localstorage-commands";


describe('My First Test', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit('https://www.mercedes-benz.co.uk/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE')
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('click to agree all', () => {
    // cy.contains('Agree to all').click();
    cy.get('.hydrated').eq(1)
      .shadow()
      .find(".cmm-cookie-banner.cmm-cookie-banner--B")
      .find(".cmm-cookie-banner__wrapper.visible")
      .find(".cmm-cookie-banner__content")
      .find(".toggle-buttons-wrapper")
      .find(".button-wrapper").first()
      .find('.wb-button.wb-button--primary.wb-button--small.wb-button--accept-all')
      .first()
      .click()
      .then(() => 
        cy.setLocalStorage("uc_user_interaction", "true")
      )
  })

  it('click Our Cars', () => {
    cy.get('.webcomponent.aem-GridColumn.aem-GridColumn--default--12').first()
      .shadow()
      .find(".owc-header.wb-new-colors")
      .find(".owc-header__wrapper")
      .find(".owc-header__header-navigation").last()
      .find(".owc-header-main-navigation__desktop-wrapper")
      .find(".owc-header-main-navigation.owc-header-main-navigation__desktop")
      .find('.owc-header-navigation-topic__button')
      .first()
      .click()
  })

  /*it('click All Models', () => {
    cy.get('.webcomponent.webcomponent-nested').first()
      .shadow()
      .find("#app-vue")
      .find(".@vmos-vmos-flyout-flyout-wrapper__YJYkl").eq(1)
      .find(".@vmos-vmos-flyout-flyout-group__3JFO_.undefined").eq(1)
      .find(".@vmos-vmos-flyout-flyout-group-item__3ItqQ").first()
      .contains('All models').click()

  })*/
})