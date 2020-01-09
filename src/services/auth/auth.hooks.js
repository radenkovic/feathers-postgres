const jwt = require('jsonwebtoken');
const { disallow, discard } = require('feathers-hooks-common');
const authorize = require('../../hooks/authorize');

module.exports = {
  before: {
    all: [],
    find: [authorize],
    get: disallow(),
    create: [],
    update: disallow(),
    patch: disallow(),
    remove: []
  },

  after: {
    all: [discard('password')],
    find: [],
    get: [],
    create: [
      hook => {
        hook.result = { user: hook.result };
        hook.result.access_token = jwt.sign(
          hook.result,
          hook.app.get('jwtSecret')
        );
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
