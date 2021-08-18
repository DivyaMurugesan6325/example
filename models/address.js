'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Artwork.associate = function(models){
        address.belongsTo(models.student, { as : 'student', foreignKey: 'studentid'});
      

          }
  };
  address.init({
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};