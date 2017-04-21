// Chai expect
const expect = require('chai').expect

// Title test
describe('Title check', function() {
    it('should return when the title has Brunch Plain Simple', function() {
      expect(wrapper.find('title').textContent).to.equal('Brunch Plain Simple - under version control');
    })
})

