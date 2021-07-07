const {ObjectID} = require('mongodb')
class PetsDao{

    gets(){
        return new Promise((resolve, reject)=>{
            collectionMongo.find().toArray((err,result) => {
                if(err){
                    reject(err)
                }else{ 
                    resolve(result)
                }
            })
        })
        
    }

    get(id){
        return new Promise((resolve, reject) => {
            collectionMongo.findOne({"_id" : ObjectID(id)}, (err,result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
    }

    add(pet){
        return new Promise((resolve, reject) => {
            collectionMongo.insertOne({...pet}, (err,result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
    }

    remove(id){
        return new Promise((resolve, reject) => {
            collectionMongo.deleteOne({"_id" : ObjectID(id)}, (err, result) => {
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
    }

    update(id, dados){
        return new Promise((resolve, reject) => {
            collectionMongo.updateOne(
                {"_id" : ObjectID(id)}, 
                {$set : dados}, 
                (err, result) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve(result)
                    }
                }
            )
        })
        
    }
}

module.exports = new PetsDao()