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

//get all travellerts
router.route("/getTravellers/:type").get(async(req,res)=>{
    let travellerType = req.params.type;
    console.log("get travellers");

    if(travellerType == "Local Traveller"){
        console.log("get local travellers");

        LocalTraveller.find().then((travellers)=>{
            res.json(travellers)
        }).catch((err)=>{
            console.log(err)
        })

    }else if(travellerType == "Foreign Traveller"){
        console.log("get foreign travellers");

        ForeignTraveller.find().then((travellers)=>{
            res.json(travellers)
        }).catch((err)=>{
            console.log(err)
        })
    }
})

//update traveller
router.route("/updateTraveller/:type/:id").put(async(req,res)=>{
    let travellerID = req.params.id;
    let travellerType = req.params.type;
    
    console.log("update traveller", travellerType, req);

    if(travellerType == "LocalTraveller"){
        console.log("update local traveller");
        const{Name,Address,Phone,Email,NIC} = req.body;

        const updateLocalTraveller = {
            Name,
            Address,
            Phone,
            Email,
            NIC
        }

        await LocalTraveller.findByIdAndUpdate(travellerID,updateLocalTraveller).then((traveller)=>{
            res.json(traveller)
        }).catch((err)=>{
            console.log(err)
        })
    }else if(travellerType == "ForeignTraveller"){
        console.log("update foreign traveller");
        const{Name,Phone,Email,PassportNo} = req.body;

        const updateForeignTraveller = {
            Name,
            Phone,
            Email,
            PassportNo
        }

        await ForeignTraveller.findByIdAndUpdate(travellerID,updateForeignTraveller).then((traveller)=>{
            res.json(traveller)
        }).catch((err)=>{
            console.log(err)
        })
    }

})

//delete traveller
router.route("/deleteTraveller/:type/:id").delete(async(req,res)=>{
    let TravellerId = req.params.id;
    let travellerType = req.params.type;

    console.log("delete traveller");
    if(travellerType == "LocalTraveller"){

        console.log("delete local  traveller");

        await LocalTraveller.findByIdAndDelete(TravellerId).then((traveller)=>{
            res.json(traveller)
        }).catch((err)=>{
            console.log(err)
        })
    }else if(travellerType == "ForeignTraveller"){

        console.log("delete foreign  traveller");

        await ForeignTraveller.findByIdAndDelete(TravellerId).then((traveller)=>{
            res.json(traveller)
            console.log("delete F");
        }).catch((err)=>{
            console.log(err)
        })
    }
})



module.exports =router;