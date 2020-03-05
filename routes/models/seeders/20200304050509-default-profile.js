'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('profile', [{
      id: 1,
      page_title: 'Page Title',
      image_path: '../images/image_profile.jpg',
      name: 'FullName',
      summary: 'Summary',
      links_icons: '# fa-square;# fa-square;# fa-square;# fa-square',
      about_me: 'A little bit about me',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('profile', null, {})
  }
}
