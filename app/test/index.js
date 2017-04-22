// Chai expect
const expect = chai.expect

// Sample test
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1, 2, 3].indexOf(4)).to.equal(-1)
    })
  })
})

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