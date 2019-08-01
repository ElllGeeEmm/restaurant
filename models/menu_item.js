'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu_item = sequelize.define('menu_item', {
    item_name: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {});
  menu_item.associate = function(models) {
    // associations can be defined here
  };
  return menu_item;
};