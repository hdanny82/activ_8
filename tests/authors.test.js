
const request = require('supertest');
const app = require('../src/app');

describe('Authors API', () => {
  it('should fetch all authors', async () => {
    const res = await request(app).get('/api/autores');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  
  it('should create a new author', async () => {
    const res = await request(app)
      .post('/api/autores')
      .send({ name: 'Test Author', email: 'test@example.com' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Test Author');
  });
});
