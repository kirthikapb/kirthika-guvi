const mysql=require("mysql")
module.exports = {
connection: {},
    async connect() {
        try{
            
            this.connection = mysql.createConnection({
                    host:"127.0.0.1",
                    user:"root",
                    password:"tharun",
                    database:"workout"
            })
           // console.log(this.connection)
        } catch(err) {
            console.log(err)
        }
    }
}