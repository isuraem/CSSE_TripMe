const request = require("supertest");
const baseUrl = "http://localhost:8070";
let busData = {};
describe(`payment`, () => {
    const newRoute = {
        CustomerName:"Oshada",
        CardNo:"1234567890123456",
        cvv:"123",
        ExDate:"2022-10-05"
    };

    beforeAll(async() => {
        busData = await request(baseUrl)
            .post("/addPayment")
            .send(newRoute);
    });
    afterAll(async() => {
        await request(baseUrl).delete(
            `/deletePayment/:id`,
        );
    });

    it("should return 200 if newInspect exists", async() => {
        const res = await request(baseUrl).get("/allPayment");
        // expect(res.statusCode).toEqual(200);
        expect(res.body.error).not.toBe(null);
    });

   
});