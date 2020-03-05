'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('resume', [{
      id: 1,
      job_title: 'Job Title',
      company: 'Company',
      period: 'Period',
      location: 'Location',
      achievements: 'Tasks, Responsibilities and Your Achievements',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('resume', null, {})
  }
}
