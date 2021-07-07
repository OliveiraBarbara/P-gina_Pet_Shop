const petControler = require('../controller/controler-animals')
const petModel = require('../model/model-animals')
const controlerPet = require('../controller/controler-animals')

module.exports = (app) => {

    app.route(controlerPet.routes().base)
        .get(controlerPet.gets())
        .post(petModel.validations(),controlerPet.add())

    app.route(controlerPet.routes().id)
        .get(controlerPet.get())
        .delete(controlerPet.remove())
        .put(petModel.validations(),controlerPet.update())
}


