const petsDao = require('../dao/dao-animals')
const { validationResult } = require('express-validator')

const objErro = { mensagem: "Houve um erro na solicitação" }
const objNaoEncontrado = { 'mensagem': "Pet não encontrado" }

class PetsControler {
    routes() {
        return {
            'base': '/animais/',
            'id': '/animais/:id'
        }
    }

    gets() {
        return function (req, resp) {
            petsDao.gets()
                .then((resultado) => resp.json(resultado))
                .catch((erro) => resp.status(500).json(objErro))
        }
    }

    get() {
        return function (req, resp) {
            petsDao.get(req.params.id)
                .then((resultado) => {
                    if(resultado){
                        resp.json(resultado)
                    }else{ 
                        resp.status(404).json(objNaoEncontrado)
                    }
                })
                .catch((erro) => resp.status(500).json(objErro))
        }
    }

    add() {
        return function (req, resp) {
            const erros = validationResult(req).array()
            if (erros.length !== 0) {
                resp.status(422).json(erros)
            } else {
                petsDao.add(req.body)
                    .then((resultado) => resp.json({ 'mensagem': "Pet inserido com sucesso" }))
                    .catch((erro) => resp.status(500).json(objErro))
            }
        }
    }

    remove() {
        return function (req, resp) {
            petsDao.remove(req.params.id)
                .then((resultado) => {
                    if(resultado.result.n > 0){
                        resp.json({ 'mensagem': "Pet removido com sucesso" })
                    }else{ 
                        resp.status(404).json(objNaoEncontrado)
                    }                
                })
                .catch((erro) => resp.status(500).json(objErro))
        }
    }

    update() {
        return function (req, resp) {
            const erros = validationResult(req).array()
            if (erros.length !== 0) {
                resp.status(422).json(erros)
            } else {
                petsDao.update(req.params.id, req.body)
                    .then((resultado) => {
                        if(resultado.result.n > 0){
                            resp.json({ 'mensagem': "Pet atualizado com sucesso" })
                        }else{ 
                            resp.status(404).json(objNaoEncontrado)
                        }  
                    })
                    .catch((erro) => resp.status(500).json(objErro))
            }
        }
    }
}

module.exports = new PetsControler()