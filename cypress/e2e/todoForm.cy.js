describe('Create Todo', () => {
  it('should create a new todo and verify the id is 201', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/todos',
      body: {
        title: 'New Todo',
        completed: false,
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.id).to.equal(201);
    });
  });
});