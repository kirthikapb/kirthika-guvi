const express=require("express")
const app=express();
const mongo=require("./shared/connect")
const customerRouter=require("./routes/customers")
const dotenv=require("dotenv")
dotenv.config();
// to convert req.body to json format
app.use(express.json())
mongo.connect()
//console.log(mongo)
app.use('/customer',customerRouter)
app.listen(3002)
// name":"xxx",
//     "date":"12/7/21",
//     "starttime":"9.30 AM",
//     "endtime":"10.30 PM",
//     "status":"booked"