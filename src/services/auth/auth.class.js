const { NotAuthenticated } = require('@feathersjs/errors');

const bcrypt = require('bcrypt');

exports.Auth = class Auth {
  constructor(options, app) {
    this.app = app;
    this.options = options || {};
  }

  async find(ctx) {
    const user = await this.app.service('users').get(ctx.user.id);
    return user;
  }

  async create(data) {
    // Find user
    const [user] = await this.app
      .service('users')
      .find({ query: { username: data.username } });
    const validPassword = await bcrypt.compare(data.password, user.password);
    if (validPassword) return user;
    throw new NotAuthenticated();
  }

  async remove(id) {
    // TODO: remove cookie if issued
    return { id };
  }
};
