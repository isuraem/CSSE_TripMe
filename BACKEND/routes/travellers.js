const router = require("express").Router();
let LocalTraveller = require("../models/LocalTraveller");
let ForeignTraveller = require("../models/ForeignTraveller");


//insert local traveller
router.route("/addLocalT").post(async(req,res)=>{

    console.log("adding local traveller......");

    const Name = req.body.Name;
    const Address = req.body.Address;
    const Phone = req.body.Phone;
    const Email = req.body.Email;
    const NIC = req.body.NIC;

    const newLocalTraveller = await new LocalTraveller({
        Name,
        Address,
        Phone,
        Email,
        NIC
    })

    newLocalTraveller.save().then(()=>{
        res.json("Local Traveller Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//insert foreign traveller
router.route("/addForeignT").post(async(req,res)=>{

    console.log("adding foreign traveller......");

    const Name = req.body.Name;
    // const Address = req.body.Address;
    const Phone = req.body.Phone;
    const Email = req.body.Email;
    const PassportNo = req.body.PassportNo;
    // const Nationality = req.body.Nationality;
    // const DateFrom = req.body.DateFrom;
    // const DateTo = req.body.DateTo;

    const newForeignTrraveller = await new ForeignTraveller({
        Name,
        // Address,
        Phone,
        Email,
        PassportNo,
        // Nationality,
        // DateFrom,
        // DateTo
    })

    newForeignTrraveller.save().then(()=>{
        res.json("Foreign Traveller Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//add traveller
router.route("/addTraveller/:type").post(async(req,res)=>{
    let travellerType = req.params.type;
    console.log("adding traveller", req, travellerType);

    if(travellerType == "Local Traveller"){
        console.log("adding local traveller");

        const Name = req.body.Name;
        const Address = req.body.Address;
        const Phone = req.body.Phone;
        const Email = req.body.Email;
        const NIC = req.body.NIC;

        const newTraveller = await new LocalTraveller({
            Name,
            Address,
            Phone,
            Email,
            NIC
        })

        newTraveller.save().then(()=>{
            res.json("traveller added")
        }).catch((err)=>{
            console.log(err);
        })

    }else if(travellerType == "Foreign Traveller"){
        console.log("adding foreign traveller");

        const Name = req.body.Name;
        // const Address = req.body.Address;
        const Phone = req.body.Phone;
        const Email = req.body.Email;
        const PassportNo = req.body.PassportNo;

        const newTraveller = await new ForeignTraveller({
            Name,
            // Address,
            Phone,
            Email,
            PassportNo
        })

        newTraveller.save().then(()=>{
            res.json("traveller added")
        }).catch((err)=>{
            console.log(err);
        })

    }else{
        console.log("cannot add traveller...",error);
    }

    // newTraveller.save().then(()=>{
    //     res.json("traveller added")
    // }).catch((err)=>{
    //     console.log(err);
    // })

})

//get a traveller
router.route("/getTraveller/:type/:id").get(async(req,res)=>{
    let travellerID = req.params.id;
    let travellerType = req.params.type;

    console.log("get traveller...", travellerID, travellerType);

    if(travellerType == "Local Traveller"){
        console.log("grt local traveller...");
        await LocalTraveller.findById(travellerID).then((traveller)=>{
            res.json(traveller)
        }).catch((err)=>{
            console.log(err)
        })
    }else if(travellerType == "Foreign Traveller"){
        console.log("get foreign traveller....");
        await ForeignTraveller.findById(travellerID).then((traveller)=>{
            res.json(traveller)
        }).catch((err)=>{
            console.log(err)
        })
    }else{
        console.log("cannot find traveller.....", error);
    }

})

//get travellerts
router.route("/getTravellers/:type").get(async(req,res)=>{
    let travellerType = req.params.type;

    if(travellerType == "Local Traveller"){

        LocalTraveller.find().then((travellers)=>{
            res.json(travellers)
        }).catch((err)=>{
            console.log(err)
        })

    }else if(travellerType == "Foreign Traveller"){

        ForeignTraveller.find().then((travellers)=>{
            res.json(travellers)
        }).catch((err)=>{
            console.log(err)
        })
    }
})

module.exports =router;