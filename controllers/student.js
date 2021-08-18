var models = require('../models');
module.exports = {
	fetchAll(req, res){
		models.student.findAll({
			include: [{
				model: models.address,
				as: 'addresses',
			}] ,
		})
		.then(function(students){
			res.status(200).json(students);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}
}
