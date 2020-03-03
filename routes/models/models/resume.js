'use strict'
module.exports = (sequelize, DataTypes) => {
  const resume = sequelize.define('resume', {
    job_title: DataTypes.STRING,
    company: DataTypes.STRING,
    period: DataTypes.STRING,
    location: DataTypes.STRING,
    achievements: DataTypes.TEXT
  }, {})
  resume.associate = function (models) {
    // associations can be defined here
  }
  return resume
}
