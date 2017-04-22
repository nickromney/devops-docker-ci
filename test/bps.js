// Chai expect
const expect = require('chai').expect


describe('DOM tests - Add Todo form', function() {
  var todoForm = document.forms[0];
  var addButton = todoForm.buttons[0];

  it('Form exists in the DOM', function() {
    expect(todoForm).to.not.equal(null);
  });
 
  it('Add button has the correct text', function() {
    expect(addButton.innerHTML).to.equal('Add Todo');
  });
});

