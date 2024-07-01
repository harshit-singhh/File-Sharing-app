const express = require("express");
require("dotenv").config();
const router = require('./routes/routes');
const cors = require("cors");
const DBconnection = require('./database/db')
const colors = require('colors');


const app = express();
DBconnection();



app.use(cors());
app.use('/', router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.yellow.underline);
});
