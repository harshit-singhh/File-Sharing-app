
const mongoose = require("mongoose");
const colors = require('colors');


const DBconnection = async() => {
    
  
    try {
      const conn = await mongoose.connect(process.env.MONGO_URL, {});

      console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
      console.log(`error while connecting with database, ${error.message}`);
    }
}

module.exports = DBconnection;