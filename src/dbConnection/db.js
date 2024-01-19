import mongoose from "mongoose";
const connectDb = async (MONGODB )=>{
    try{
        const DB_OPTION = {
      dbName:"hittok_test"
        }
    await mongoose.connect(MONGODB,DB_OPTION)
    console.log("Connected to MongoDb Database")
    }catch(error){
        console.log(error)
    }
}

export default connectDb



