const jwt = require('jasonwebtoken')

const secret = 'mysecret';
const expiration = '3h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        // returns the token part after the split and pop
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
          }

        if (!token) {
        return req;
        }

        // tries to verify token and add the decoded user's data to the request
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        // return the request object so it can be passed to the resolver as `context`
        return req;
    },
    signToken: function ({ email, name, _id }) {
        const payload = { email, name, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
}