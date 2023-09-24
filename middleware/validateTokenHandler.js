const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { constants } = require("../constants");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    console.log('authHeader:::', authHeader);
    if(authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err) {
                res.status(constants.AUTHORIZATION_ERROR);
                throw new Error("User is not authorized")
            }
            console.log(decoded)
            req.user = decoded.user;
        });
        return next();
    }
    throw new Error('Invalid token');
});

module.exports = validateToken;