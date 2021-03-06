'use strict'
let mongoose = require('mongoose');
module.exports = mongoose.model('Owner', new mongoose.Schema({

    firstname: {
        type: String,
        require: true
    },
    surname: {
        type: String
    },
    job: {
        type: String
    },
    age: {
        type: Number
    },
    clients: {
        type: Number
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String
    },
    avatar: {
        type: String
    }
}, {
    timestamps: true
}))
