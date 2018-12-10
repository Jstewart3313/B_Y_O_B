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

      it("should return at status 404 if the maker does not exist", done => {
        const expected = {
          error: "Could not find Maker with id 300"
        };

        chai
          .request(app)
          .get("/api/v1/makers/300")
          .end((error, response) => {
            expect(response).to.have.status(404);
            expect(response.body).to.deep.equal(expected);
            done();
          });
      });
    });

    describe("/api/v1/makers/:maker_id", () => {
      it("should put a maker", done => {
        const body = { maker: "test", year: "2010" };
        const expected = {
          message:
            "Edit successful. Maker with id of 2 name has been changed from Bentley to test."
        };

        chai
          .request(app)
          .put("/api/v1/makers/2")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(202);
            expect(response.body).to.deep.equal(expected);
            done();
          });
      });

      it("should return 404 if the maker does not exist", done => {
        const body = { maker: "test", year: "2010" };

        chai
          .request(app)
          .put("/api/v1/makers/300")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(404);
            done();
          });
      });

      it("should return a 422 if no maker name sent", done => {
        const body = { year: "2010" };
        const expected = { error: "No maker name provided" };

        chai
          .request(app)
          .put("/api/v1/makers/2")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(422);
            expect(response.body).to.deep.equal(expected);
            done();
          });
      });
    });
  });

  describe("/api/v1/makers/:maker_id", () => {
    

    it("should delete a maker", done => {
      const expected = {
        makerId: 1,
        message: `Maker 4 has been deleted.`
      };

      chai
        .request(app)
        .delete("/api/v1/makers/4")
        .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.deep.equal(expected);
          done();
        });
    });

    it('should return a 404 if the maker does not exist', done => {

      chai
        .request(app)
        .delete('/api/v1/makers/900')
        .end((error, response) => {
          expect(response).to.have.status(200)
          done()
        })
    })
  });

  describe('/api/v1/makers', () => {
    it('should add a maker', done => {
      const maker = {
        maker: 'Fiat',
        year: 3000
      }
      const expected = { id: 6 }

      chai
        .request(app)
        .post('/api/v1/makers')
        .send(maker)
        .end((error, response) => {
          expect(response).to.have.status(201)
          expect(response.body).to.deep.equal(expected)
          done()
        })
    })
  })

  //========= model tests ========//

  describe('Models', () => {
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
      it('should return the models that match the engine search', done => {
  
        chai
          .request(app)
          .get('/api/v1/models?engine=V8')
          .end((error, response) => {
            expect(response).to.have.status(200)
            expect(response.body.length).to.equal(3)
            done()
          })
      })


    });

    describe('/api/v1/models/:id', () => {

      it('should return a status 200', done => {
        const expected = [{
          id: 1,
          model: "R8",
          displacement: "5.2",
          engine: "V10",
          drivetrain: "AWD",
          horsepower: 610,
          torque: 430,
          price: 175000,
          maker_id: 1
        }]
        
        chai
          .request(app)
          .get('/api/v1/models/1')
          .end((erro, response) => {
            expect(response).to.have.status(200)
            expect(response.body.length).to.equal(1)
            done()
          })
      })

      it('should return a status 400 if the model does not exist', done => {

        const expected = {
          error: `Could not find project with id 900`
        }

        chai
          .request(app)
          .get('/api/v1/models/900')
          .end((error, response) => {
            expect(response).to.have.status(404)
            expect(response.body).to.deep.equal(expected)
            done()
          })
      })
    })

    describe('/api/v1/makers/:maker_id/models/:model_id', () => {

      it('should delete a model', done => {
        const expected = {
          message: `model 1 for maker 1 has been deleted.`
        }

        chai
          .request(app)
          .delete('/api/v1/makers/1/models/1')
          .end((error, response) => {
            expect(response).to.have.status(200)
            expect(response.body).to.deep.equal(expected)
            done()
          })
      })
    })

  })

});
