
'use strict'

let CarsController = require('../controllers/CarsController')

module.exports = (app) => {
    // Create new controller
    let ctrl = new CarsController();

    //GET (for READ)  method
    app.get('/cars', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    //GET (for READ) method with request params id
    app.get('/cars/:id', (req, res, next) => {
        return ctrl.findById(req, res, next)
    })

    //POST (for CREATE) method
    app.post('/cars', (req, res, next) => {
        return ctrl.create(req, res, next)
    })

    app.post('/upload', (req, res, next) => {
        return ctrl.upload(req, res, next)
    })

    //PUT (for UPDATE) method with request params id
    app.put('/cars/:id', (req, res, next) => {
        return ctrl.update(req, res, next)
    })

    //DELETE (for DELETE) method with request params id
    app.delete('/cars/:id', (req, res, next) => {
        return ctrl.delete(req, res, next)
    })
    app.get('/cars/:search', (req, res, next) => {
    return ctrl.findOne(req, res, next)
      })

}
