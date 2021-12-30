var fs = require('fs');
// to get current time and date
 const d=new Date();
 // to get year,date,... separetely
 const y=d.getFullYear();
 const m = d.getMonth()+1 ;
 const da = d.getDate();
 const h = d.getHours();
 const mi = d.getMinutes();
 const s = d.getSeconds();
 // to convert date,time...  into string
 const year=y.toString()
 const month=m.toString()
 const date=da.toString()
 const hour=h.toString()
 const minute=mi.toString()
 const second=s.toString()
const filename=year+"-"+month+"-"+date+"-"+hour+"hrs"+minute+"mins"+second+"secs";
//console.log(filename);
//
const express=require("express")
const app=express()
const port=3001
let directory_name = __dirname
//api to create file 
app.get("/",(req,res)=>
{
    // fs.writefile will create file with currenttime and date
    fs.writeFile(filename, filename, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
        
        });
    res.send(filename)//response msg
})
// api to get files in the folder
app.get("/getfiles",(req,res)=>
{
    // to get all the files in the directory
    let filenames = fs.readdirSync(directory_name);
    filenames.forEach((file) => {
        console.log("File:", file);
    });
    res.send("files displayed successfully");
      
})
app.listen(port,()=>{
    console.log("sever started")
})
