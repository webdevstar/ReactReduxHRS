import {urls, user, apiUrls, monthName} from '../../../index';
import {signin, signout, apiCall} from '../../../helper';
import {urlVisited, visitIndexRoute} from '../../../visitRoutes';

describe('Test leaves page', () => {
  it('api is fired to get leaves and will list under the 4 tabs', () => {
    visitIndexRoute();
    signin(user.admin);
    urlVisited(urls.baseUrl + urls.home);
    cy.get('.nav > #manage_leaves').should('be.visible');
    cy.get('.nav > #manage_leaves').click();
    cy.get('.nav-sub > #manage_leaves').should('be.visible');
    cy.get('.nav-sub > #manage_leaves').click();
    cy.get('.app-body').should('be.visible');
    cy.get('.app-body .padding').should('be.visible');
    cy.get('.app-body .padding .row > div').should('be.visible');
  });
  it('every tab will have list of employees falls under that tab in left panel', () => {
    visitIndexRoute();
    signin(user.admin);
    urlVisited(urls.baseUrl + urls.home);
    cy.get('.nav > #manage_leaves').should('be.visible');
    cy.get('.nav > #manage_leaves').click();
    cy.get('.nav-sub > #manage_leaves').should('be.visible');
    cy.get('.nav-sub > #manage_leaves').click();
    cy.get('.app-body').should('be.visible');
    cy.get('.app-body .padding').should('be.visible');
    cy.get('.app-body .padding .row > div').should('be.visible');
    cy.get('#manage_leave_header').should('be.visible');
    cy.get('#manage_leave_header .leaves-tab .blue').should('be.visible');
    cy.get('#manage_leave_header .leaves-tab .yellow-A200').should('be.visible');
    cy.get('#manage_leave_header .leaves-tab .green-A200').should('be.visible');
    cy.get('#manage_leave_header .leaves-tab .red-500').should('be.visible');
    cy.get('#manage_leave_header .leaves-tab .blue').click();
    cy.get('#no_manage_leave').should('be.visible');
  });
  it('clicking any user on left panel will show respective leave detail on right panel', () => {

  });
});
