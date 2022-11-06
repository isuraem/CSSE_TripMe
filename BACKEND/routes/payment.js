const router = require("express").Router();
let Payment = require("../models/Payment");

//add payment
router.route("/addPayment").post(async(req,res)=>{
    console.log("adding bus service...");

    const CustomerName = req.body.CustomerName;
    const CardNo = req.body.CardNo;
    const cvv = req.body.cvv;
    const ExDate = req.body.ExDate;


    const newPayment = await new Payment({
        CustomerName,
        CardNo,
        cvv,
        ExDate
    })

    newPayment.save().then(()=>{
        res.json("Payment Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//get all payment
router.route("/allPayment").get(async(req,res)=>{
    console.log("get payment");

    Payment.find().then((payment)=>{
        res.json(payment)
    }).catch((err)=>{
        console.log(err)
    })
})

//delete payment
router.route("/deletePayment/:id").delete(async(req,res)=>{
    let paymentID = req.params.id;

    console.log("delete payment");

    await Payment.findByIdAndDelete(paymentID).then((payment)=>{
        res.json(payment)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;