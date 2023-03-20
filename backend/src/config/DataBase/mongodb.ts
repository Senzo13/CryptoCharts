import mongoose from "mongoose";
import dotenv from "dotenv";
import makeUri from "./makeUri";
dotenv.config();

const uri = makeUri(process.env.NODE_ENV, process.env.MONGO_HOST);
const db = () => {
  console.log("Connecting database to uri: " + uri)
  try {
    return mongoose.connect(uri, {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASSWORD,
    })
  } catch (error) {
    console.log(error);
    
  }
};

export default db;
