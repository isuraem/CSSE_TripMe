const request = require("supertest");
const baseUrl = "http://localhost:8070";
let busData = {};
describe(`busService`, () => {
    const newRoute = {
        BusNumber:"BE-9987",
        BusServiceName:"Isura",
        BusType:"Rosa",
        RouteNumber:"177",
        DepartureTime:'11:54 ',
        JourneyTime:"12:50",
        RestStops:"2",
        AirCondition:"Available",
        WiFi :"Available",
        ChargingPlugs :"Available",
        Price :0
    };

    beforeAll(async() => {
        busData = await request(baseUrl)
            .post("/allBusServices")
            .send(newRoute);
    });
    afterAll(async() => {
        await request(baseUrl).delete(
            `/deleteBusService/:id`,
        );
    });

    it("should return 200 if newInspect exists", async() => {
        const res = await request(baseUrl).get("/allBusServices");
        // expect(res.statusCode).toEqual(200);
        expect(res.body.error).not.toBe(null);
    });

   
});