const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

const app = require("../app");

chai.use(chaiHttp);

describe("API ENDPOINT TESTING", () => {
  it("GET LANDING PAGE", (done) => {
    chai
      .request(app)
      .get("/api/v1/member/landing-page")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("Object");
        expect(res.body).to.have.property("hero");
        expect(res.body.hero).to.have.all.keys(
          "travelers",
          "treasures",
          "cities"
        );
        done();
      });
  });
});
