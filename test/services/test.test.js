const app = require('../../src/app');

describe('\'test\' service', () => {
  it('registered the service', () => {
    const service = app.service('test');
    expect(service).toBeTruthy();
  });
});
