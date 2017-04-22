var app = require('../server');
// Chai expect
const expect = require('chai').expect;
var request = require('supertest');

describe('Availability test', function() {
  describe('GET root page', function(){
    it('expects a status of 200 OK', function(done){
      request(app)
      .get('/')
    .expect(200, done); 
    });
  });
});