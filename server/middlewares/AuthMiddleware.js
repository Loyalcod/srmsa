const jwt = require('jsonwebtoken')

const verifyAuthentication = async(req,res,next)=>{
    if(!req?.cookies?.jwt) return res.status(403).send({error:"cookie not present "})
    const AuthHeader = req.headers.authorization
    if(!AuthHeader) return res.status(401).json({error:"string not present"})
    const authToken = AuthHeader.split(' ')[1]
    jwt.verify(authToken,process.env.ACCESS_JWT_SECRET,(err,payload)=>{
        if(err) return res.status(403).json({error:"auth token is invalid"})
    })
    next()


}



module.exports = verifyAuthentication