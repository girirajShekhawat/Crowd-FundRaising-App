import mongoose from "mongoose";
import { db_Name } from "../constants.js";
async function connectDb(){
try {
const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${db_Name}`);

 
    console.log("connectionInstanse==>",connectionInstance)


} catch (error) {
    console.log("Error:",error)
    process.exit(1)
}

}

export default connectDb;