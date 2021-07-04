const app = require('./src/config/custom-express')
const mongo = require('./src/config/database')

mongo.cliente.connect(mongo.uri, function(err, client){
    if(err){
        throw err 
    }else{ 
        const dbMongo = client.db(mongo.database)
        collectionMongo  = dbMongo.collection(mongo.collection)

        app.listen(3000, ()=>{
            console.log('It is on!!!!')
        })
    }
})

