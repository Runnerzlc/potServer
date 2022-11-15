const fs = require(`fs`);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//mongoose.set('useFindAndModify', false);

const plantSchema = new Schema({
    timeStamp : String,
    temp : String,
    humidity : String,
    light : String,
})

module.exports = mongoose.model('Plant', plantSchema);