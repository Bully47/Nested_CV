'use strict'
let jwt = require('jsonwebtoken')
const ENV = require('../../config/env')[process.env.NODE_ENV || 'development']

module.exports = {

    isOwner(req, res, next) {
        if (req.headers.authorization) {
            jwt.verify(req.headers.authorization, ENV.token, (err, decoded) => {
                if (err) {
                    next(err)
                } else if (decoded._doc.isOwner) {
                    next()
                } else {
                    res.sendStatus(403)
                }
            })
        } else {
            res.sendStatus(401)
        }
      }



    }
