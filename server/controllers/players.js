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
		var player = new Player({name: req.body.name, position: "11"});
		player.save(function(err){
			if(err){
				console.log(err);
				res.json({err:err});
			}
			res.json("Success!");
		})
	},
	update: function(req,res){
		Player.findOne({_id: req.params.id},function(err,player){
			if(err){
				console.log("Finding Player Error:", err);
				res.json({err:err});
			}
			else{
				player.name = req.body.name;
				player.save(function(err){
					if(err){
						console.log("Save Error: ", err);
						res.json({err:err});
					}
					else{
						// console.log("player: ",player);
						res.json("Success!");
					}
				});
			}
		});
	},
	destroy: function(req,res){
		Player.remove({_id: req.params.id},function(err){
			if(err){
				console.log("Delete Error: ",err);
				res.json({error:err});
			}
			res.redirect(303,'/all');
		})
	}
}
