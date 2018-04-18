var mongoose = require('mongoose');

var PlayerSchema = mongoose.Schema({
	name: {type: String, require: true},
	position: {type: String},
	game: [{type:Number}]
},{timestamps: true})

mongoose.model('Player',PlayerSchema)