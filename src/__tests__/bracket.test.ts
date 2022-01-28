import request from 'supertest'
import app from '../config/app'

describe('Post Bracket', () => {
    it('Sent Value to Bracket', async () => {
        const res = await request(app)
            .post('/api/bracket')
            .send({
                input: '()',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('output');
    });
});