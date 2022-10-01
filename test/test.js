const User = require("../models/userModel");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
chai.should();

chai.use(chaiHttp);
describe("users",()=>{
    beforeEach((done)=>{
        User.deleteMany({},(err)=>{
            done();
        });
    });
    describe("/GET user",()=>{
        it("It Should Get all users",(done)=>{
            chai
            .request(app)
            .get("/api/users")
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.data.should.be.a("array");
                res.body.data.length.should.be.eql(0);
                done();
            });
        });
    });

    describe("/POST user",()=>{
        it("it should new post a users",(done)=>{
            let user ={
                name:"vellai",
                phone:"098798627",
                email:"velli@fs.com",
                image:"https://www.istockphoto.com/collaboration/boards/7fT9zCSzIkaVFQzJBZE6dA",
            };
            chai
            .request(app)
            .post("/api/users")
            .send(user)
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.data.should.be.a("object");
                res.body.status.should.be.eql("Success");
                done();
            });

        });
    });
})


