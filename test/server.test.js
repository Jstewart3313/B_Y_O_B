const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;

const environment = "testing";
const config = require("../knexfile")[environment];
const database = require("knex")(config);

chai.use(chaiHttp);

describe("Server", () => {
  beforeEach(done => {
    database.migrate
      .rollback()
      .then(() => database.migrate.latest())
      .then(() => database.seed.run())
      .then(() => done());
  });

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

  describe("Makers", () => {
    beforeEach(done => {
      database.migrate
        .rollback()
        .then(() => database.migrate.latest())
        .then(() => database.seed.run())
        .then(() => done());
    });

    after(done => {
      database.migrate
        .rollback()
        .then(() => database.migrate.latest())
        .then(() => database.seed.run())
        .then(() =>
          console.log("Testing complete. Database rolled back and reseeded")
        )
        .then(() => done());
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

    describe("/api/v1/makers/:id", () => {
      it("should get makers by maker id", done => {
        const expected = 1;

        chai
          .request(app)
          .get("/api/v1/makers/1")
          .end((error, response) => {
            expect(response).to.have.status(200);
            expect(response.body.length).to.equal(expected);
            done();
          });
      });

      it('should return at status 404 if the maker does not exist', done => {
        const expected = {
          error: 'Could not find Maker with id 300'
        }

        chai
          .request(app)
          .get('/api/v1/makers/300')
          .end((error, response) => {
            expect(response).to.have.status(404)
            expect(response.body).to.deep.equal(expected)
            done()
          })
      })
    });

    describe('/api/v1/makers/:maker_id', () => {
      it('should put a maker', done => {
        const body = { maker: 'test', year: '2010'}
        const expected = {
          "message": "Edit successful. Maker with id of 2 name has been changed from Bentley to test."
        }

        chai
          .request(app)
          .put('/api/v1/makers/2')
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(202)
            expect(response.body).to.deep.equal(expected)
            done()
          })
      })

      it('should return 404 if the maker does not exist', done => {
        const body = { maker: 'test', year: '2010'}
        
        chai
          .request(app)
          .put('/api/v1/makers/300')
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(404)
            done()
          })
      
      })

      it('should return a 422 if no maker name sent', done => {

        const body = { year: '2010'}
        const expected = { error: "No maker name provided" }

        chai
          .request(app)
          .put('/api/v1/makers/2')
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(422)
            expect(response.body).to.deep.equal(expected)
            done()
          })
      })
    })
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
