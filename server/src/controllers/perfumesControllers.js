
import Product from "../model/appSchema.js"
import { response } from "../utils/response.js"


export const fetchAllProds =async (req,res,next)=>{
    try {
       const res = await Product.collection.find() 
       const data = res.json()
       response(req,res,101,data)
       console.log(data)
    } catch (error) {
        console.log("Error",error)
        next(error)
    }
}

export const fetchByProduct = async (req,res,next)=>{
    try {
        const {_id} = req.body
        const res = await Product.collection.findOne({ _id: _id })
        const data = res.json()
        response(req,res,101,data)
    } catch (error) {
        console.log("Error",error)
        next(error)
    }
}

export default {fetchAllProds,fetchByProduct}