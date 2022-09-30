const AllowedOrigin = require("../config/allowedOrigin");

const credentail = async(req,res,next)=>{
    const origin = req.headers.origin
    if(AllowedOrigin.includes(origin)){
        res.header('Access-Control-Allow-Credentials', true)
    }
    next()

}



module.exports = credentail