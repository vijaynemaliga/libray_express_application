const mongoose= require('mongoose')

const Schema=mongoose.Schema

const bookschema= new Schema({
    title:{type:String,required:true},
    author: { type: Schema.Types.ObjectId, ref: "author", required: true },
    summary: { type: String, required: true },
    genre: [{ type: Schema.Types.ObjectId, ref: "genere" }],
})


bookschema.virtual('url').get(function(){
    return `/catalog/book/${this._id}`
})

module.exports= mongoose.model('book',bookschema)