var models = require('../models');

module.exports = {

fetchsec(req, res){
    models.section.findAll( {
        where:{ sec :"a"},
        include: [{
            model: models.student,
            as: 'students'
        },{
    
        }],

        
    })
    .then(function(artist){
        res.status(200).json(artist);
    })
    .catch(function(error){
        res.status(500).json(error);
    });
}
}