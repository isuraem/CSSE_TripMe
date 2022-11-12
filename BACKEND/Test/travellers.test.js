const request = require("supertest");
const baseUrl = "http://localhost:8070";
let busData = {};
describe(`traveller`, () => {
    const newRoute = {
        Name:"Udana",
        Address:"colombo",
        Phone:"0765432189",
        Email:"udana@gmail.com",
        NIC:"998765432V",
        Password:"udaa123",
        Amount:0
    };

    beforeAll(async() => {
        busData = await request(baseUrl)
            .post("/addLocalT")
            .send(newRoute);
    });
    // afterAll(async() => {
    //     await request(baseUrl).delete(
    //         `/delateBooking/:id`,
    //     );
    // });

    // it("should return 200 if newInspect exists", async() => {
    //     const res = await request(baseUrl).get("/allBookings");
    //     // expect(res.statusCode).toEqual(200);
    //     expect(res.body.error).not.toBe(null);
    // });

   
});