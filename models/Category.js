const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNulls:false,
      primaryKey:true,
      autoIncrement:true,
    },
    category_name:{
      type:DataTypes.STRING,
      allowNulls:false,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;



