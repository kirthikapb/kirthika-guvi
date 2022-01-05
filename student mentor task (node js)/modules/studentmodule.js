const mysql = require('../sharred/connect');

exports.getStudent = async (req,res,next) => {
    mysql.connection.query("Select* from student", (err, result)=> {
        if(err) res.status(500).send({msg: err})
        res.send(result)
    })
}
exports.getMentor = async (req,res,next) => {
    mysql.connection.query("Select* from mentor", (err, result)=> {
        if(err) res.status(500).send({msg: err})
        res.send(result)
    })
}
exports.createStudent = async (req,res,next) => {
    const query = `Insert into student (studentid,studentname) values ('${req.body.studentid}','${req.body.studentname}' )`
    //const query = `Insert into student (studentid, mentorid, studentname) values ('${req.body.studentid}', '${req.body.mentorid}', '${req.body.studentname}'}')`
    //var sql = "INSERT INTO customers (studentid, mentorid,studentname) VALUES ('{req.body.studentid}', '{req.body.mentorid}' ,'{req.body.studentname}')";
    mysql.connection.query(query, (err, result)=> {
        if(err) res.status(500).send({msg: err})
        res.send(result)
    })
}
exports.createMentor = async (req,res,next) => {
    const query = `Insert into mentor (mentorid,mentorname) values ('${req.body.mentorid}','${req.body.mentorname}' )`
    
    mysql.connection.query(query, (err, result)=> {
        if(err) res.status(500).send({msg: err})
        res.send(result)
    })
}
exports.assignStudent = async (req,res,next) => {
    const query = `update student set mentorid='${req.body.mentorid}' where studentid ='${req.body.studentid}'`;
    
    mysql.connection.query(query, (err, result)=> {
        if(err) res.status(500).send({msg: err})
        res.send(result)
    })
}
exports.changeMentor = async (req,res,next) => {
    const query = `update student set mentorid='${req.body.mentorid}' where studentid ='${req.body.studentid}'`;
    
    mysql.connection.query(query, (err, result)=> {
        if(err) res.status(500).send({msg: err})
        res.send(result)
    })
}
exports.show= async (req,res,next) => {
const query = `select * from student where mentorid='${req.body.mentorid}'`;
    mysql.connection.query(query, (err, result)=> {
        if(err) res.status(500).send({msg: err})
        res.send(result)
    })
}



