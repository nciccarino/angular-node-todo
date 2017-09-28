//Requiring models directory
var db = require('../models');

module.exports= function(app){

	//route to all data
	app.get('/data', function(req, res){
		console.log(db.Movie)
		db.Task.findAll({}).then(function(data){
			console.log(data);
			res.json(data);
		})
	});

	app.post("/newtask/:", function(req, res) {
		console.log(req.body);
		db.Task.create({
			title: req.body.title,
			text: req.body.text,
			status: req.body.status	
		}).then(function(data) {
			res.json(data);
		}).catch(function(err){
			console.log(err);
		});
	}); 

	app.put("/save/:id", function(req, res){
    db.Task.update({
    	title: req.body.title,
    	text: req.body.text,
    	status: req.body.status
    },
      {
        where: {
          id: req.params.id
        }
      }).then(function(data){
        res.json(data);
      })
	});

	app.delete("/delete/:id", function(req, res) {
		db.Task.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(data) {
			res.json(data); 
		});
	});
}//end module.exports