const bcrypt = require('bcrypt');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(async () => {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'dan',
          password: await bcrypt.hash('asdfasdf123', 10),
          email: 'dan@test.com'
        }
      ]);
    });
};
