const router = require("express").Router();
let BusService = require("../models/BusService");

//add bus service
router.route("/addBusService").post(async(req,res)=>{
    console.log("adding bus service...");

    const BusNumber = req.body.BusNumber;
    const BusServiceName = req.body.BusServiceName;
    const BusType = req.body.BusType;
    const RouteNumber = req.body.RouteNumber;
    const DepartureTime = req.body.DepartureTime;
    const JourneyTime = req.body.JourneyTime;
    const RestStops = req.body.RestStops;
    const AirCondition = req.body.AirCondition;
    const WiFi = req.body.WiFi;
    const ChargingPlugs = req.body.ChargingPlugs;
    const Price = Number(req.body.Price);


    const newBusService = await new BusService({
        BusNumber,
        BusServiceName,
        BusType,
        RouteNumber,
        DepartureTime,
        JourneyTime,
        RestStops,
        AirCondition,
        WiFi,
        ChargingPlugs,
        Price
    })

    newBusService.save().then(()=>{
        res.json("Bus Service Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//get all bus services
router.route("/allBusServices").get(async(req,res)=>{
    BusService.find().then((busService)=>{
        res.json(busService)
        console.log("get bus services now");
    }).catch((err)=>{
        console.log(err)
    })
})


//update bus services
router.route("/updateBusService/:id").put(async(req,res)=>{
    let busserviceID = req.params.id;
 console.log("id eka",req.params.id);
    console.log("update bus service", req.body);

    const{BusNumber,BusServiceName,BusType,RouteNumber,DepartureTime,JourneyTime,
            RestStops,AirCondition,WiFi,ChargingPlugs,Price} = req.body;
    
    const updateBusService = {
        BusNumber,
        BusServiceName,
        BusType,
        RouteNumber,
        DepartureTime,
        JourneyTime,
        RestStops,
        AirCondition,
        WiFi,
        ChargingPlugs,
        Price
    }

    await BusService.findByIdAndUpdate(busserviceID, updateBusService).then((busService)=>{
        res.json(busService)
    }).catch((err)=>{
        console.log(err)
    })
})

//delete bus service
router.route("/deleteBusService/:id").delete(async(req,res)=>{
    let busserviceID = req.params.id;

    console.log("delete bus service");

    await BusService.findByIdAndDelete(busserviceID).then((busService)=>{
        res.json(busService)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;