'use strict'
let jwt = require('jsonwebtoken')
let Controller = require('./Controller')
let formidable = require('formidable')
let path = require('path')
let fs = require('fs')

const OWNER = require('../models/owner')
const ENV = require('../../config/env')[process.env.NODE_ENV || 'development']

class OwnersController extends Controller {

    constructor() {
        super(OWNER)
    }


}

module.exports = OwnersController
