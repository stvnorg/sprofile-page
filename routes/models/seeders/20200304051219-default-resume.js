'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    const row = await queryInterface.rawSelect('resume', {
      where: {
        id: 1
      }
    }, ['id'])
    if (!row) {
      return queryInterface.bulkInsert('resume', [{
        id: 1,
        job_title: 'Job Title',
        company: 'Company',
        period: 'Period',
        location: 'Location',
        achievements: '<li>Tasks, Responsibilities and Your Achievements</li>',
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('resume', null, {})
  }
}
