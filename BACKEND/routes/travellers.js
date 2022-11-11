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
    const Password = req.body.Password;

    const newLocalTraveller = await new LocalTraveller({
        Name,
        Address,
        Phone,
        Email,
        NIC,
        Password
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
    const Password = req.body.Password;
    const Amount = req.body.Amount;
    // const Nationality = req.body.Nationality;
    // const DateFrom = req.body.DateFrom;
    // const DateTo = req.body.DateTo;

    const newForeignTrraveller = await new ForeignTraveller({
        Name,
        // Address,
        Phone,
        Email,
        PassportNo,
        Password,
        Amount
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

    if(travellerType == "LocalTraveller"){
        console.log("adding local traveller");

        const Name = req.body.Name;
        const Address = req.body.Address;
        const Phone = req.body.Phone;
        const Email = req.body.Email;
        const NIC = req.body.NIC;
        const Password = req.body.Password;

        const newTraveller = await new LocalTraveller({
            Name,
            Address,
            Phone,
            Email,
            NIC,
            Password
        })

        newTraveller.save().then(()=>{
            res.json("traveller added")
        }).catch((err)=>{
            console.log(err);
        })

    }else if(travellerType == "ForeignTraveller"){
        console.log("adding foreign traveller");

        const Name = req.body.Name;
        // const Address = req.body.Address;
        const Phone = req.body.Phone;
        const Email = req.body.Email;
        const PassportNo = req.body.PassportNo;
        const Password = req.body.Password;

        const newTraveller = await new ForeignTraveller({
            Name,
            // Address,
            Phone,
            Email,
            PassportNo,
            Password
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
router.route("/getTraveller/:type/:Email").get(async(req,res)=>{
    let travellerEmail = req.params.Email;
    let travellerType = req.params.type;

    console.log("get traveller...", travellerEmail, travellerType);

    if(travellerType == "LocalTraveller"){
        console.log("grt local traveller...");
        await LocalTraveller.findOne({Email:travellerEmail}).then((traveller)=>{
            res.json(traveller)
        }).catch((err)=>{
            console.log(err)
        })
    }else if(travellerType == "ForeignTraveller"){
        console.log("get foreign traveller....");
        await ForeignTraveller.findOne({Email:travellerEmail}).then((traveller)=>{
            res.json(traveller)
        }).catch((err)=>{
            console.log(err)
        })
    }else{
        console.log("cannot find traveller.....", error);
    }

})


//get all travellerts
router.route("/allTravellers/:type").get(async(req,res)=>{
    let travellerType = req.params.type;
    console.log("get travellers");

    if(travellerType == "LocalTraveller"){
        console.log("get local travellers");

        LocalTraveller.find().then((travellers)=>{
            res.json(travellers)
        }).catch((err)=>{
            console.log(err)
        })

    }else if(travellerType == "ForeignTraveller"){
        console.log("get foreign travellers");

        ForeignTraveller.find().then((travellers)=>{
            res.json(travellers)
        }).catch((err)=>{
            console.log(err)
        })
    }
})

//update traveller
router.route("/updateTraveller/:type/:Email").put(async(req,res)=>{
    let travellerEmaill = req.params.Email;
    let travellerType = req.params.type;
    
    console.log("update traveller", travellerType, req);

    if(travellerType == "LocalTraveller"){
        console.log("update local traveller");
        const{Name,Address,Phone,Email,NIC,Password} = req.body;
        const Amountt = Number(req.body.Amountt);
        const Amount1 = Number(req.body.Amount1);

        const Amount = Amountt+Amount1;

        const updateLocalTraveller = {
            Name,
            Address,
            Phone,
            Email,
            NIC,
            Password,
            Amount
        }

        await LocalTraveller.findOneAndUpdate({Email:Email},updateLocalTraveller).then((traveller)=>{
            res.json(traveller)
        }).catch((err)=>{
            console.log(err)
        })
    }else if(travellerType == "ForeignTraveller"){
        console.log("update foreign traveller");
        const{Name,Phone,Email,PassportNo,Password} = req.body;
        const Amountt = Number(req.body.Amountt);
        const Amount1 = Number(req.body.Amount1);

        const Amount = Amountt+Amount1;

        const updateForeignTraveller = {
            Name,
            Phone,
            Email,
            PassportNo,
            Password,
            Amount
        }

        await ForeignTraveller.findOneAndUpdate({Email:Email},updateForeignTraveller).then((traveller)=>{
            res.json(traveller)
        }).catch((err)=>{
            console.log(err)
        })
    }

})

//delete traveller
router.route("/deleteTraveller/:type/:Email").delete(async(req,res)=>{
    let TravellerEmail = req.params.Email;
    let travellerType = req.params.type;

    console.log("delete traveller");
    if(travellerType == "LocalTraveller"){

        console.log("delete local  traveller");

        await LocalTraveller.findOneAndDelete(TravellerEmail).then((traveller)=>{
            res.json(traveller)
        }).catch((err)=>{
            console.log(err)
        })
    }else if(travellerType == "ForeignTraveller"){

        console.log("delete foreign  traveller");

        await ForeignTraveller.findOneAndDelete(TravellerEmail).then((traveller)=>{
            res.json(traveller)
            console.log("delete F");
        }).catch((err)=>{
            console.log(err)
        })
    }
})

//check availability of user in the database
router.route("/getUser/:email/:PW/:type").get(async(req,res)=>{

    let Email = req.params.email;
    let password = req.params.PW;
    let type = req.params.type;

    console.log("get user...",Email,password,type);
    
    if(type == "LocalTraveller"){
        const user = await LocalTraveller.findOne({Email: Email , Password: password}).then((user)=>{
            res.status(200).send({status : "User Fetched", login:user})
        }).catch(()=>{
            console.log(err.message);
            res.status(500).send({status: "error eith fetching user", error:err.message});
        })
    }else if(type == "ForeignTraveller"){
        const user = await ForeignTraveller.findOne({Email: Email , Password: password}).then((user)=>{
            res.status(200).send({status : "User Fetched", login:user})
        }).catch(()=>{
            console.log(err.message);
            res.status(500).send({status: "error eith fetching user", error:err.message});
        })
    }
})

module.exports =router;