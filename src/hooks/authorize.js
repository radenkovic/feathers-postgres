const { NotAuthenticated } = require('@feathersjs/errors');

module.exports = hook => {
  if (hook.params.provider && !hook.params.user) throw new NotAuthenticated();
};
