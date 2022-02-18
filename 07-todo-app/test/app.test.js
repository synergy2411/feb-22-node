const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/index");
const TodoModel = require("../src/model/todo-model");

chai.use(chaiHttp);

describe("Todo App", () => {
    beforeEach(async () => {
        await TodoModel.deleteMany()
    })
    describe("/GET todos", () => {
        it("Should return all todos", ()=>{
            chai.request(app)
                .get("/todos")
                .end((err,response) => {
                    chai.expect(response.status).to.be.equal(200)
                    chai.expect(response.body).to.be.an("array")
                    chai.expect(response.body.length).to.equal(0)
                })
        })
    })

    describe("/POST todos", () => {
        it("Should create one item in todo list", () => {
            const todo = new TodoModel({label : "New Item Created"})
            chai.request(app)
                .post('/todos')
                .send(todo)
                .end((err, response) => {
                    chai.expect(response.body).not.to.be.undefined;
                    chai.expect(response.body.label).to.equal("New Item Created")
                    chai.expect(response.body._id).not.to.be.undefined;
                })
        })
    })

    // it("Should pass the test", () => {
    //     assert.equal(1,2,"1 should be equal to 1");
    // })
})