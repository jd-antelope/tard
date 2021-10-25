const watch = require('gulp-watch')
const start = require('./scripts/created-md')

watch(['packages/selling-c-ui/src/components/*/*.md'], function() {
  start()
});

function defaultTask() {}

exports.default = defaultTask