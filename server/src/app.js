import express from "express"
import cors from "cors"
import homeRoute from "./routes/homeRoute.js"
import adminRoute from "./routes/adminRoute.js"
import { loggerMiddleware } from "./middleware/loggerMiddleware.js"
import { errorMiddleware } from "./middleware/errMiddleware.js"

const corsOptions = {
    origin : "*",
    methods: ["GET","POST","PUT","PATCH","DELETE"],
    allowedHeaders : ['Content-Type',"Authorization"],
    credentials : true
}

export const createApp = ()=>{
    const app=express()
    app.use(express.json())
    app.use(cors(corsOptions))
    app.use(loggerMiddleware)

    app.use('/products',homeRoute)
    app.use('/admin',adminRoute)
    app.get('/',(req,res)=>{
        res.json({
            "message" : "server is running!"
        })
    })
    app.use(errorMiddleware)
    return app
}