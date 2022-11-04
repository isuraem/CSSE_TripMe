const router = require("express").Router();
let BusService = require("../models/BusService");

//add bus service
router.route("/addBusService").post(async(req,res)=>{
    console.log("adding bus service...");

    const BusNumber = req.body.BusNumber;
    const BusType = req.body.BusType;
    const RouteName = req.body.RouteName;
    const RouteNumber = req.body.RouteNumber;

    const newBusService = await new BusService({
        BusNumber,
        BusType,
        RouteName,
        RouteNumber
    })

    newBusService.save().then(()=>{
        res.json("Bus Service Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//get all bus services
router.route("/allBusServices").get(async(req,res)=>{
    console.log("get bus services");

    BusService.find().then((busService)=>{
        res.json(busService)
    }).catch((err)=>{
        console.log(err)
    })
})


//update bus services
router.route("/updateBusService/:id").put(async(req,res)=>{
    let busserviceID = req.params.id;

    console.log("update bus service", req);

    const{BusNumber,BusType,RouteName,RouteNumber} = req.body;
    const updateBusService = {
        BusNumber,
        BusType,
        RouteName,
        RouteNumber
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