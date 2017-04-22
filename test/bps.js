var app = require('../server');
// Chai expect
const expect = require('chai').expect;
var request = require('supertest');

describe('Availability test', function() {
  it('should return a status of 200 OK', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});