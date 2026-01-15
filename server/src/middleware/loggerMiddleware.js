export const loggerMiddleware = (req,res,next)=>{
    console.log(`[${new Date.toString()}] ${req.path} ${req.params}`)
    next()
}