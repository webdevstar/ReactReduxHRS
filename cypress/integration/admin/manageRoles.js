import {urls, user, month, year, contains, click, wait, shouldNotBeVisble, shouldBeVisible} from '../../index';
import {signin, signout, apiCall} from '../../helper';
import {urlVisited, visitIndexRoute} from '../../visitRoutes';

describe('Test roles page', () => {
  it('roles list are on left panel', () => {
    visitIndexRoute();
    signin(user.admin);
    urlVisited(urls.baseUrl + urls.home);
    cy.get('.nav > #manage_roles').should('be.visible');
    cy.get('.nav > #manage_roles').click();
    cy.get('.app-body').should('be.visible');
    cy.get('.app-body .padding').should('be.visible');
    cy.get('#accordion').should('be.visible');
  });
  it('users list on right panel', () => {
    visitIndexRoute();
    signin(user.admin);
    urlVisited(urls.baseUrl + urls.home);
    cy.get('.nav > #manage_roles').should('be.visible');
    cy.get('.nav > #manage_roles').click();
    cy.get('.app-body').should('be.visible');
    cy.get('.app-body .padding').should('be.visible');
    cy.get('#user_list').should('be.visible');
  });
  it('click on Add New Role will open form to add new role, on submit of add role form will list newly added role on left panel', () => {
    visitIndexRoute();
    signin(user.admin);
    urlVisited(urls.baseUrl + urls.home);
    cy.get('.nav > #manage_roles').should('be.visible');
    cy.get('.nav > #manage_roles').click();
    cy.get('.app-body').should('be.visible');
    cy.get('.app-body .padding').should('be.visible');
    cy.get('#role_button').should('be.visible');
    cy.get('#add_role').should('be.visible');
    cy.get('#add_role').click();
    cy.get('.dialog-add-role').should('be.visible');
    cy.get('#role_selector').should('be.visible');
    cy.get('#role_name').should('be.visible');
    cy.get('#role_desc').should('be.visible');
    cy.get('#role_submit_button').should('be.visible');
    cy.get('#role_name').type('Test_Role');
    cy.get('#role_desc').type('Test_Role description');
    cy.get('#role_submit_button').click();
    cy.get('#accordion #Test_Role_body').should('be.visible');
    cy.get('#accordion #Test_Role_body #Test_Role_delete').should('be.visible');
    cy.get('#accordion #Test_Role_body #Test_Role_delete').click();
    cy.get('.showSweetAlert').should('be.visible');
    cy.get('.sa-button-container').should('be.visible');
    cy.get('.sa-confirm-button-container').should('be.visible');
    cy.get('.sa-confirm-button-container').click();
    cy.get('.showSweetAlert').should('be.visible');
    cy.get('.sa-button-container').should('be.visible');
    cy.get('.sa-confirm-button-container').should('be.visible');
    cy.get('.sa-confirm-button-container').click();
  });
  it('on left panel, selecting new role from select box will change the role of the selected employee ', () => {
    visitIndexRoute();
    signin(user.admin);
    urlVisited(urls.baseUrl + urls.home);
    cy.get('.nav > #manage_roles').should('be.visible');
    cy.get('.nav > #manage_roles').click();
    cy.get('.app-body').should('be.visible');
    cy.get('.app-body .padding').should('be.visible');
    cy.get('#role_button').should('be.visible');
    cy.get('#add_role').should('be.visible');
    cy.get('#add_role').click();
    cy.get('.dialog-add-role').should('be.visible');
    cy.get('#role_selector').should('be.visible');
    cy.get('#role_name').should('be.visible');
    cy.get('#role_desc').should('be.visible');
    cy.get('#role_submit_button').should('be.visible');
    cy.get('#role_name').type('Test_Role');
    cy.get('#role_desc').type('Test_Role description');
    cy.get('#role_submit_button').click();
    cy.get('#accordion #Test_Role_body').should('be.visible');
    cy.get('#user_list').should('be.visible');
    cy.get('#global_guest_list').should('be.visible');
    cy.get('#global_guest_list #389_change').should('be.visible');
    cy.get('#389_change').select('Test_Role');
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    cy.get('#global_guest_list').should('be.visible').contains('Test_Role');
  });
});
