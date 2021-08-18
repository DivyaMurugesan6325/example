'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    class: DataTypes.INTEGER,
    section: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student',
  });

  student.associate = function(models){
    student.hasMany(models.address, {as: 'addresses', foreignKey: 'studentid'});


  // student.hasMany(models.class,{as:'classes',foreignKey:'studentid'})
    //student.hasMany(models.section,{as:'sections',foreignKey:'studentid'});
  // student.belongsTo(models.class, { as : 'classes', foreignKey: 'studentid' });


  }

  return student;
};