/* =========================================================================
 * Dependencies
 * ========================================================================= */
var _ = require('underscore');

var packageJson = require('../package.json');

/* =========================================================================
 * App Config Settings
 * ========================================================================= */
var defaultSettings = {
  VERSION: packageJson.version,
  BUILD_DIR: 'build'
};

var production = _.extend(_.extend({}, defaultSettings), {
  ENV: 'production'
});

var development = _.extend(_.extend({}, defaultSettings), {
  ENV: 'development'
});

var local = _.extend(_.extend({}, defaultSettings), {
  ENV: 'local'
});

var test = _.extend(_.extend({}, defaultSettings), {
  ENV: 'test'
});

// exports
module.exports = {
  production: production,
  development: development,
  local: local,
  test: test
};
