const {check} = require('express-validator')

class PetsModel{
    validations(){
        return [
            check('nome').trim().isLength({min : 5}).withMessage('Nome de Dono Inválido (ao menos 5 caracteres)'),
            check('nomePet').trim().isLength({min : 3}).withMessage('Nome de Pet Inválido (ao menos 3 caracteres)'),
            check('cpf').matches(/([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/).withMessage('CPF Inválido')
        ]
    }
}

module.exports = new PetsModel()