var models = require('../models');
module.exports = {
	fetchAll(req, res){
		models.classes.findAll({
			
		})
		.then(function(classes){
			res.status(200).json(classes);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},
	fetchsec(req, res){
		models.section.findAll( {
			where :{
			sec :"a"
			}
		})
		.then(function(artist){
			res.status(200).json(artist);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}
	


}
