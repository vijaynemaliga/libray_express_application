const mongoose=require('mongoose')

const Schema=mongoose.Schema

const genere_schema=new Schema({

    name:{ type:String},
})
genere_schema.virtual('url').get(function(){
    return `/catalog/genre/${this._id}`
})
module.exports=mongoose.model('genere',genere_schema)