const cliente = require('mongodb').MongoClient
 
const uri = 'mongodb://localhost:27017'

const database = 'animais'

const collection = 'registro'

module.exports = {cliente, uri, database, collection}