'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    const row = await queryInterface.rawSelect('profile', {
      where: {
        id: 1
      }
    }, ['id'])
    if (!row) {
      return queryInterface.bulkInsert('profile', [{
        id: 1,
        page_title: 'Page Title',
        image_path: '../images/default.jpg',
        name: 'FullName',
        summary: 'Summary',
        links_icons: 'http://localhost fa-square;http://localhost fa-square;http://localhost fa-square;http://localhost fa-square',
        about_me: 'A little bit about me',
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('profile', null, {})
  }
}
