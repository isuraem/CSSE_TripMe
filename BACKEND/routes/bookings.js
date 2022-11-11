const router = require("express").Router();
let Booking = require("../models/Booking");
const { v4: uuidv4 } = require("uuid");

//add booking
router.route("/addBooking").post(async(req,res)=>{
    console.log("add booking...");
    const TicketNo = uuidv4();
    const CustomerName = req.body.CusName;
    // const CustomerID = req.body.CustomerID;
    const Mobile = req.body.Mobile;
    const Email = req.body.Email;
    const PickUp = req.body.PickUp;
    const Destination = req.body.Destination;
    // const Date = req.body.Date;
    // const Time = req.body.Time;
    const BusService = req.body.BusService;
    // const SourceCity = req.body.SourceCity;
    // const DestinationCity = req.body.DestinationCity;
    // const PassengerID = req.body.PassengerID;
    // const TicketNo = req.body.TicketNo;
    const Status = req.body.Status;
    const TripPrice = Number(req.body.TPrice);


    const newBooking = await new Booking({
        CustomerName,
        Mobile,
        Email,
        PickUp,
        Destination,
        BusService,
        // SourceCity,
        // DestinationCity,
        // PassengerID,
        TicketNo,
        TripPrice,
        Status,
    })

    newBooking.save().then(()=>{
        res.json("Booking Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//get all bookings
router.route("/allBookings").get(async(req,res)=>{
    console.log("gett bookings");
    Booking.find().then((booking)=>{
        res.json(booking)
    }).catch((err)=>{
        console.log(err)
    })
})

//update booking
router.route("/updatebooking/:id").put(async(req,res)=>{
    let bookingID = req.params.id;
    console.log("update booking",req);

    const {CustomerName,CustomerID,Mobile,Email,PickUp,Destination,Date,Time,
        BusService,SourceCity,DestinationCity,PassengerID,TicketNo,Status} = req.body;
    
        const updateBooking = {
        CustomerName,
        // CustomerID,
        Mobile,
        Email,
        PickUp,
        Destination,
        Date,
        Time,
        BusService,
        // SourceCity,
        // DestinationCity,
        // PassengerID,
        // TicketNo,
        Status
    }

    await Booking.findByIdAndUpdate(bookingID, updateBooking).then((booking)=>{
        res.json(booking)
    }).catch((err)=>{
        console.log(err)
    })
})

//delete booking
router.route("/delateBooking/:id").delete(async(req,res)=>{
    let bookingID = req.params.id;

    console.log("delete booking");

    await Booking.findByIdAndDelete(bookingID).then((booking)=>{
        res.json(booking)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;