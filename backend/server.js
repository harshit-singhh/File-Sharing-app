const express = require("express");
require("dotenv").config();
const router = require('./routes/routes');
const cors = require("cors");
const DBconnection = require('./database/db')
const colors = require('colors');
const path = require('path');


const app = express();
DBconnection();



app.use(cors());
app.use('/', router);

const PORT = process.env.PORT;



// ---------------------------DEPLOYMENT----------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname1, '/frontend/build')));

  app.get('*', (req, res) => {
                  //resolve
    res.sendFile(path.join(__dirname1, "frontend/build/index.html"));
  })
}
else {
  app.get("/", (req, res) => {
    res.send("API is Running successfully");
  })
}

// ------------------------DEPLOYMENT------------------------------------



app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.yellow.underline);
});
