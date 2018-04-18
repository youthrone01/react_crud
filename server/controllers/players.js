var mongoose = require('mongoose');
var Player = mongoose.model("Player");

module.exports = {
	all: function(req,res){
		Player.find({}).sort('createdAt').exec(function(err,players){
			if(err){
				console.log(err);
				res.json({err:err});
			}
			// console.log(players);
			res.json(players);
		})
	},
	create: function(req,res){
		console.log(req.body);
		
		res.json("Success!");
		
	},
	
}
