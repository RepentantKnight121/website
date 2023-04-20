const jwt = require('jsonwebtoken');

const Account = require("../access/account");

const signToken = (id, username) => {
    return jwt.sign(
        {
            id: id,
            username: username
        },
        process.env.JWT_SECRET,
        { expiresIn:  process.env.JWT_EXPIRED_IN }
    );
}
exports.login = async (req, res) => {
    try{
        const dataLogin = req.body;
        const accountLogin = await Account.checkLogin(dataLogin.username , dataLogin.password)
        usernameLogin = accountLogin.account_username
        if(!accountLogin) return `No found account with username ${username}`
    
        const token = signToken(accountLogin.account_username ,  accountLogin.account_permission );
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: {token},
        });

    }catch (e) {
        console.error(e);
        res
            .status(500)        // 500 - Internal Error
            .json({
                code: 500,
                msg: e.toString()
            });
    }
}


//middle - check if request is from login user
exports.protect = async (req, res, next) => {
    try{
        // 1) Getting token from header "Authorization"
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

            token = req.headers.authorization.split(' ')[1];
        }
        if (!token) {
            return res.status(401)        // 401 - Unauthorized
                .json({code: 401, msg: 'You are not logged in! Please log in to get access.'});
        }
        // 2) Verification token
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log("payload:", payload);
        const decoded = jwt.decode(token , process.env.JWT_SECRET);
        console.log(decoded)
    }
    catch (e) {
        console.error(e);
        console.error(e);
        return res
            .status(500)        // 500 - Internal Error
            .json({
                code: 500,
                msg: e.toString()
            });
    }
    next();
}
