const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const expect = chai.expect

const environment = 'testing';
const config = require('../knexfile')[environment];
const database = require('knex')(config);

chai.use(chaiHttp);

describe("Server", () => {
  describe("/", () => {
    it("should return the homepage with text", done => {
      chai
        .request(app)
        .get("/")
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response).to.be.html;
          done();
        });
    });
  });

  describe("/api/v1/makers", () => {
    it("should return a status 200", done => {
      chai
        .request(app)
        .get("/api/v1/makers")
        .end((err, response) => {
          expect(response).to.have.status(200);
          done();
        });
    });
  });

  describe("/api/v1/models", () => {
    it("should return a status 200", done => {
      chai
        .request(app)
        .get("/api/v1/models")
        .end((err, response) => {
          expect(response).to.have.status(200);
          done();
        });
    });
  });
});
