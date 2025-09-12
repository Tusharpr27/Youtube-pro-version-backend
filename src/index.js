import dotenv from "dotenv";
import connectDB from "./db/index.js";



dotenv.config({
  path: './env'
})


connectDB()



/*
import express from "express"
const app = express()

( async ()  =>  {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/$
      {DB_NAME}`)

      // express part 
      app.on("error", (error) => {
      console.error("ERROR: ", error); // Using console.error is more standard for errors
      throw error;
      //if it is getting error in express part connection
    })
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to port $
        {process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR:", error)  
    throw error
  }
})()
*/