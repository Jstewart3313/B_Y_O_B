const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should;
const app = require('../server');
let bodyParser = require('body-parser');

chai.use(chaiHttp);
// app.use(bodyParser.json());

describe('Server', () => {
  describe('should return  the homepage with text', (done) => {
    chai.request(app)
    .get('/')
    .end((err, response) => {
      response.should.have.status(200);
      response.should.be.html;
      done()
    })
  });
});