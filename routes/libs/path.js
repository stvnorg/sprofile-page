const routesDirName = 'routes'

function Path () {}

Path.prototype.getAssetsDirPath = function () {
  return routesDirName + '/assets/'
}

module.exports = Path
