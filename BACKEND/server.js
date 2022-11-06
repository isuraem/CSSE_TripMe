const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

const connection = mongoose.connection;
//connect database
connection.once("open",()=>{
    console.log("mongodb connection success !");
})


//connecting backend and frontend for travellers
const TravellerRouter = require("./routes/travellers");
app.use("/traveller", TravellerRouter);

//connecting backend and frontend for busServices
const BusServiceRouter = require("./routes/busServices");
app.use("/busService", BusServiceRouter);

//connecting backend and frontend for bookings
const BookingRouter = require("./routes/bookings");
app.use("/booking", BookingRouter);

//connecting backend and frontend for login
const LoginRouter = require("./routes/login");
app.use("/login",LoginRouter);

const PaymentRouter = require("./routes/payment");
app.use("/payment",PaymentRouter);


app.listen(PORT, ()=>{
    console.log(`server is up and running on PORT: ${PORT}`);
})