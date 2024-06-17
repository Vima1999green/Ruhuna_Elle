const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const keys = require("./config/Keys");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = keys.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening to the port ${PORT}`);
});

const connectToDataBase = async () => {
  try {
    await mongoose.connect(keys.MONGO_URI);
    console.log("database connected successFully");
  } catch (error) {
    console.error(error);
  }
};

connectToDataBase();
