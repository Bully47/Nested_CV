'use strict'
let mongoose = require('mongoose')

module.exports = mongoose.model('Cars', new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  year: {
    type: Date, default: Date.now
  },
  description:{
    type: String
  },
  picture : {
    type: String
  },
  owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Owner'
  }
},{
  timestamps: true
}))
