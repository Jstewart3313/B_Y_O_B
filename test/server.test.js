const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../server');

chai.use(chaiHttp);

describe('Server', () => {
  describe('/', () => {
    it('should return the homepage with text', (done) => {
      chai.request(app)
      .get('/')
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response).to.be.html;
        done()
      })
    });
  })

  describe('/api/v1/makers', () => {
    it('should return a status 200', (done) => {
      chai.request(app)
      .get('/api/v1/makers')
      .end((err, response) => {
        expect(response).to.have.status(200);
        done()
      })
    })
  })
  
});