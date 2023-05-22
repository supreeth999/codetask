describe('Todo Form', () => {
  it('creates a new todo with ID 201', () => {
    cy.visit('/todos');
    cy.get('input#title').type('My Todo');
    cy.get('input#completed').check();
    cy.get('button[type="submit"]').click();
    cy.contains('Created Todo ID: 201');
  });
});