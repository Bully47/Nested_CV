'use strict'
let jwt = require('jsonwebtoken')
const OWNER = require('../models/owner')
const ENV = require('../../config/env')[process.env.NODE_ENV || 'development']

class AuthenticationController {

    constructor() {}

    local(req, res, next) {
            if (!req.body.email || !req.body.password) {
                res.status(400).send("Please enter your email and password")
            } else {
                OWNER.findOne(req.body, {
                    password: 0
                }, (err, owner) => {
                    if (err)
                        next(err)
                    else if (!owner)
                        res.status(403).send("User not found")
                    else {
                        let token = jwt.sign(owner, ENV.token, {
                            expiresIn: "24h"
                        })

                        // return the information including token as JSON
                        res.json({
                            success: true,
                            user: owner,
                            token: token
                        });
                    }
                });
            }
        }
    }

module.exports = AuthenticationController
