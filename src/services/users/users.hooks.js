const { discard, iff, isProvider } = require('feathers-hooks-common');
const authorize = require('../../hooks/authorize');
module.exports = {
  before: {
    all: [authorize],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [iff(isProvider('external'), discard('password'))],
    find: [],
    get: [],
    create: [],
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
