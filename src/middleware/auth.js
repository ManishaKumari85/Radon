const jwt = require("jsonwebtoken");

let authentication = async function(req, res, next){
    try{
        let token = req.headers[`x-api-key`]
        if(!token) return res.status(400).send({status: false, msg:"Token must be present in Headers"});
        next();
    }
    catch(err){
        res.status(500).send({status: false, msg: err.message})
    }
}

const authorization = async function (req, res, next){
    try{
        let token = req.headers[`x-api-key`];
        let decodedToken = jwt.verify(token, "project-blog");
        let userLoggedIn = decodedToken.userId;
        let userToBeModified = req.body.authorId || req.params.authorId || req.query.authorId;
        if(userLoggedIn !== userToBeModified) return res.status(403).send({status: false, msg: "You are not authorised to do this"});
        next();
    }
    catch(err){
        res.status(500).send({status: false, msg: err.message});
    }
}

module.exports = {authentication, authorization};