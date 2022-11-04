const router = require("express").Router();
let Booking = require("../models/Booking");

//add booking
router.route("/addBooking").post(async(req,res)=>{
    console.log("add booking...");

    const RouteNumber = req.body.RouteNumber;
    const TripFrom = req.body.TripFrom;
    const TripTo = req.body.TripTo;
    const DateFrom = req.body.DateFrom;
    const DateTo = req.body.DateTo;
    const Price = req.body.Price;

    const newBooking = await new Booking({
        RouteNumber,
        TripFrom,
        TripTo,
        DateFrom,
        DateTo,
        Price
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

    const {RouteNumber,TripFrom,TripTo,DateFrom,DateTo,Price} = req.body;
    const updateBooking = {
        RouteNumber,
        TripFrom,
        TripTo,
        DateFrom,
        DateTo,
        Price
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