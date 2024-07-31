const express = require("express");
const app = express();
const port = 5000;
const mongoose = require('mongoose')
const cors = require('cors')


app.use(cors())

const connectDB = async () =>  {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/dineTrack");
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error connecting to Database: ", error);
  }
};
connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
