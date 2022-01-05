const express = require("express");
const mysql = require('./sharred/connect');
const studentRouter = require('./routes/student');
const app = express();
app.use(express.json());
mysql.connect();

app.use('/student', studentRouter);

app.listen(3001,()=>
{
    console.log("started")
});