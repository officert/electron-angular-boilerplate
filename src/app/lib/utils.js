// dependencies
var path = require('path');

/*
 * @module Utils
 * @constructor Utils
 */
function Utils() {}

/*
 * @function browserPath
 * @argument [string] path
 */
Utils.prototype.browserFilePath = function browserFilePath(fileName) {
  var fullPath = 'file://' + path.join(__dirname, '../../browser', fileName);

  return fullPath;
};

module.exports = new Utils();
