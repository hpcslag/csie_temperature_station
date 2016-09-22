var views = require('co-views');

module.exports = views(__dirname + '/../www', {
  map: { html: 'ejs' }
});