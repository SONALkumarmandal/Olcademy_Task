

export const response = (res,data,data)=>{
    res.status(data).json({
        success : true,
        data
    })
}