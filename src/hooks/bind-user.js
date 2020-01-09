const { get } = require('lodash');
const jwt = require('jsonwebtoken');

module.exports = hook => {
  const { app } = hook;
  const token = get(hook, 'params.headers.authorization');
  if (token) {
    // TODO: From cookie

    // From Authorization header
    try {
      const spl = token.split('Bearer ')[1];
      const decode = jwt.verify(spl, app.get('jwtSecret'));
      hook.params.user = decode.user;
    } catch (e) {
      // NO OP
    }
  }
  return hook;
};
