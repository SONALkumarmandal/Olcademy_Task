import Product from "../model/appSchema"


export const adminUpload =async (err,req,res,next)=>{
    try {
        const body=req.body
        await Product.create(body)
       response(req,101,body)
    } catch (error) {
     console.log(error)
     next(error)
    }
}