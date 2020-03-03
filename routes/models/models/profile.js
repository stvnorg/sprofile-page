'use strict'
module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
    page_title: DataTypes.STRING,
    image_path: DataTypes.STRING,
    name: DataTypes.STRING,
    summary: DataTypes.STRING,
    links_icons: DataTypes.STRING,
    about_me: DataTypes.TEXT
  }, {})
  profile.associate = function (models) {
    // associations can be defined here
  }
  return profile
}
