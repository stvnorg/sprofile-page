function splitString (string) {
  return string.split(';')
}

function Parser () {}

Parser.prototype.getLinksAndIcons = function (string) {
  var data = splitString(string)
  var LinksAndIcons = []
  data.forEach((element) => {
    element = element.split(' ')
    LinksAndIcons.push({ link: element[0], icon: element[1] })
  })
  return LinksAndIcons
}

module.exports = Parser
