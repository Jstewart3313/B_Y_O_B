const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../server');
let bodyParser = require('body-parser');

chai.use(chaiHttp);
app.use(bodyParser.json());

describe('Server', () => {
  describe('/', () => {
  });
});