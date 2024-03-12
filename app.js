require("dotenv").config({path: "./.env"})
const express = require('express');
const app = express();



app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});