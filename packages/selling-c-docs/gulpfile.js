const watch = require('gulp-watch')
const start = require('./scripts/created-md')

watch(['src/docs/*.md'], function() {
  start()
});

function defaultTask() {}

exports.default = defaultTask