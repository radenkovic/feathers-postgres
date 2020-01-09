const users = require('./users/users.service.js');
const auth = require('./auth/auth.service.js');

module.exports = function(app) {
  app.configure(users);
  app.configure(auth);
};
