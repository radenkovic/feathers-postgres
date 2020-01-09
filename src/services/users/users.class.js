/* eslint-disable no-unused-vars */
exports.Users = class Users {
  constructor(options) {
    this.options = options || {};
    this.model = options.model;
  }

  async find(params) {
    console.log('PARAMS', params);
    const res = await this.model.select('*');
    return res;
  }

  async get(id, params) {
    return {
      id,
      text: `A new message with ID: ${id}!`
    };
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
