'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     section.belongsTo(models.student, { as : 'student', foreignKey: 'studentid' });
     // section.hasMany(models.student,{ as :'students', "foreignKey":'studentid' });
    }
  };
  section.init({
    sec: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'section',
  });
  return section;
};