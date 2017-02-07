
'use strict'
// Require parent class
let Controller = require('./Controller');
let formidable = require('formidable'),
fs = require('fs')

const Car = require('../models/cars')

class CarsController extends Controller {

    constructor() {
      // Call parent constructor with model param
      super(Car)
    }
    find(req, res, next) {
        // Get all documents and filter with queries string (req.query : ex. http://domain.ext/api/?query=string)
        this.model
        .find(req.query.id)
        .populate('owner')
        .exec((err, documents) => {
            res.json(documents)
        })
     }
     findById(req, res, next) {
       // Get all documents and filter with queries string (req.query : ex. http://domain.ext/api/?query=string)
       this.model
       .findById(req.params.id)
       .populate('owner')
       .exec((err, documents) => {
           res.json(documents)
       })
    }

      findOne(req, res, next) {
            let search = new RegExp("(" + req.params.search + ")", "igm")
            this.model.find({
                $or: [{
                    'name': search
                     }]
            }, (err, cars) => {
                if (err) next(err)
                else
                    res.json(cars)
            });
        }

     create(req, res, next) {
        // Create a document with data from body request (req.body)
        this.model.create(req.body, (err, document) => {
            if (err) {
                next(err)
            } else {
                this.model
                .findById(document._id, {
                  password: 0
                })
                .populate('Owner')
                .exec((err, car) => {

                  res.json(car)
                })
              }
            })
          }

       update(req, res, next) {
        // Update a document by request param, this param needs to be the id with the data from body request (req.body)
        this.model.update({
            _id: req.params.id
        }, req.body, (err) => {
            if (err) {
                next(err)
            } else {
              this.model
              .findById(req.params.id, {
                password: 0
              })
              .populate('owner')
              .exec((err, cars) => {
                res.json(cars)
              })
            }
        })
    }

}

module.exports = CarsController
