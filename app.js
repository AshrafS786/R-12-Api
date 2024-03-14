require("dotenv").config({path: "./.env"})
const express = require('express');
const app = express();

//db connection
require("./models/dbconfig").dbconnection();

//routes
const userRouter = require('./routes/userRoute')

//logger
const logger = require("morgan");
app.use(logger("tiny"));


//body parser
app.use(express.json());

app.use(express.urlencoded({ extended: true }));




app.use('/api/user', userRouter);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});