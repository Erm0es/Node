import request from 'supertest';

import app from '../script/app.js';

test('home page shows header, body and footer', async () => {
    const response = await request(app)
    .get('/')
    .expect(200);
});

test('movie page shows details of movies', async () => {
    const response = await request(app)
    .get('/movies')
    .expect(200);
});