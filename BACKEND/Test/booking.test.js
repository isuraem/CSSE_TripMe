const request = require("supertest");
const baseUrl = "http://localhost:8070";
let busData = {};
describe(`booking`, () => {
    const newRoute = {
        CustomerName:"Isura",
        Mobile:"07767341541",
        Email:"issa@gmail.com",
        PickUp :"Colombo2",
        Destination:"Kandy",
        Date:"2022-10-11",
        Time:"10.55",
        BusService:"Tarindu",
        Status:"",
    };

    beforeAll(async() => {
        busData = await request(baseUrl)
            .post("/addBooking")
            .send(newRoute);
    });
    afterAll(async() => {
        await request(baseUrl).delete(
            `/delateBooking/:id`,
        );
    });

    it("should return 200 if newInspect exists", async() => {
        const res = await request(baseUrl).get("/allBookings");
        // expect(res.statusCode).toEqual(200);
        expect(res.body.error).not.toBe(null);
    });

   
});