/* eslint-disable no-unused-vars */
exports.Users = class Users {
  constructor(options) {
    this.options = options || {};
    this.model = options.model;
  }

  async find(ctx) {
    const res = await this.model.select('*').where(ctx.query);
    return res;
  }

  async get(id) {
    return this.model
      .select('*')
      .where({ id })
      .first();
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return { id };
  }
};
