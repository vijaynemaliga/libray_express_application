const mongoose = require("mongoose");
const { DateTime }=require('luxon')
const Schema = mongoose.Schema;

// Specify formatting options
const options = {
  weekday: 'short', // abbreviated day of the week (e.g., "Thu")
  year: 'numeric',  // full year (e.g., "1920")
  month: 'short',   // abbreviated month name (e.g., "Jan")
  day: '2-digit',    // two-digit day of the month (e.g., "01")
  hour: 'numeric',   // hour (e.g., "18")
  minute: 'numeric', // minute (e.g., "00")
  second: 'numeric', // second (e.g., "00")
  timeZoneName: 'short' // abbreviated time zone name (e.g., "EST")
};


const authorschema= new Schema({
first_name:{type:String,maxLength:100,required:true},
last_name:{type:String,maxLength:100,required:true},
date_of_birth:{type:Date},
date_of_death:{type:Date},
})

authorschema.virtual('name').get(function(){
    let full_name=""
    full_name=`${this.first_name},${this.last_name}`
    return full_name
})
authorschema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/author/${this._id}`;
  });
  authorschema.virtual('birth_details').get(function(){
    let birth_date= new Date(this.birth_date)
    
    const formatted_birth_date = birth_date.toLocaleString('en-US', options);
   // const formatted__death_date=deat
   return formatted_birth_date
  })
module.exports= mongoose.model('author',authorschema)