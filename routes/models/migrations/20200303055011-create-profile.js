'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('profile', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      page_title: {
        type: Sequelize.STRING
      },
      image_path: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.STRING
      },
      links_icons: {
        type: Sequelize.STRING
      },
      about_me: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('profile')
  }
}
