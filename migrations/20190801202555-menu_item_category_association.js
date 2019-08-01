'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('menu_items', ['category_id'], {
      type: 'foreign key',
      name: 'fkey_menu_item_category',
      references: { //Required field
        table: 'categories',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('menu_items', 'fkey_menu_item_category')
  }
};
