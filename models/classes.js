'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //classes.belongsTo(models.student, { as : 'student', foreignKey: 'studentid' });
      //classes.hasMany(models.student, { as : 'student', foreignKey: 'studentid' });
     // student.hasMany(models.section,{as:'sections',foreignKey:'studentid'})


      // define association here
    }
  };
  classes.init({
    class: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'class',
  });
  return classes;
};