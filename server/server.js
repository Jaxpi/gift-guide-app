const jwt = require('jasonwebtoken')

const secret = 'mysecret';
const expiration = '3h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;


    }
}