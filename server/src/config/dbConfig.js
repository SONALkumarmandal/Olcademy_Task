import { appConfig } from "./appConfig.js"
import mongoose from "mongoose"
export const dbConfig=async()=>{
    try {
       await mongoose.connect(appConfig.db_url)
       console.log("MongoDB Connected !")
    } catch (error) {
        console.log("DataBase connection error !",error)
        process.exit(0)
    }
}