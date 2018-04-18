var players = require('../controllers/players.js');
var path = require('path');
const publicPath = path.join(__dirname, "../../", "public");


module.exports = function(app){
	app.get('/players', (req,res)=>{players.all(req,res)})
	app.post('/add', (req,res,next)=>{players.create(req,res)})
	app.put('/players/:playerid/:game', (req,res,next)=>{players.update(req,res)})
	app.delete('/players/:id',(req,res,next)=>{players.destroy(req,res)})

	app.all("*",function(req,res){
		res.sendFile(path.join(publicPath, "index.html"));
	})
}