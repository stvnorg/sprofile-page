const routesDirName = 'routes'

function Path () {}

Path.prototype.getAssetsDirPath = function () {
  return routesDirName + '/assets/'
}

Path.prototype.getIndexPageTemplatePath = function () {
  return routesDirName + '/templates/index.ejs'
}

Path.prototype.getCVFilePath = function () {
  return routesDirName + '/yaml/cv.yaml'
}

module.exports = Path
