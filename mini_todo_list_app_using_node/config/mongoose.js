import dotenv from 'dotenv'
import mongoose from "mongoose"; // import mongoose
dotenv.config()
mongoose.connect(process.env.DB_URL) // build db
const db = mongoose.connection //build connection

// if issue in binding triggered
db.on('error', console.error.bind(console, "Error while binding the DB"))

// if binding is successful
db.once('open',function(){
    console.log("DB sucessfully connected")
})

export default db