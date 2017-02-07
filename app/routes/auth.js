'use strict'
let AuthentificationController = require('../controllers/AuthentificationController')
let OwnersController = require('../controllers/OwnersController')
module.exports = (app) => {

    let ctrl = new OwnersController()
    let authentication = new AuthentificationController()

    app.post('/auth', authentication.local)


}
