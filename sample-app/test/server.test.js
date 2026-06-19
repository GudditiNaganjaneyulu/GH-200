const request = require('supertest');
const app = require('../src/server');

describe('GET /', () => {
  test('responds with welcome HTML content', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Welcome to GitHub Actions Demo App');
    expect(response.text).toContain('<img src="/welcome.png" alt="Welcome Image">');
  });
});

describe('GET /welcome.png', () => {
  test('serves the static welcome image', async () => {
    const response = await request(app).get('/welcome.png');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('image/png');
  });
});

describe('GET /health', () => {
  test('returns health status JSON', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'UP');
    expect(response.body).toHaveProperty('application', 'welcome-app');
    expect(response.body).toHaveProperty('timestamp');
  });
});
