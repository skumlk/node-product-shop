import request from 'supertest'
import { app, server } from '../index'

describe('Get Products', () => {
  it('should get all products', async () => {

      const response = await request(app)
        .get('/api/products')

      expect(response.statusCode).toEqual(200)
      expect(response.body.data.length).toBe(3)
  })
})

describe('Get a product', () => {
  it('should get a product', async () => {

      const response = await request(app)
        .get('/api/products/1')

      expect(response.statusCode).toEqual(200)
      expect(response.body.data).not.toBeNull()
  })

  it('should get not found error', async () => {

    const response = await request(app)
      .get('/api/products/10')

    expect(response.statusCode).toEqual(404)
  })

  it('should get 400 error when passing invalid id', async () => {

    const response = await request(app)
      .get('/api/products/10test')

    expect(response.statusCode).toEqual(400)
  })
})

describe('Delete a product', () => {
  it('should delete a product', async () => {

      let response = await request(app)
        .delete('/api/products/1')
        
      expect(response.statusCode).toEqual(200)
      
      response = await request(app)
          .get('/api/products/1')
      
      expect(response.statusCode).toEqual(404)
  })

  it('shoud return 404 deleting a product not existing', async () => {

    const response = await request(app)
      .delete('/api/products/22')

    expect(response.statusCode).toEqual(404)
  })
})

describe('Upload a CSV file', () => {
  it('should upload new products', async () => {

      const filePath = `${__dirname}/test_files/data.csv`;

      let response = await request(app)
        .post('/api/products/upload')
        .attach('csv', filePath);

      expect(response.statusCode).toEqual(200)
      
      response = await request(app)
          .get('/api/products')
      
      expect(response.statusCode).toEqual(200)
      expect(response.body.data.length).toBe(6)
  })
})

afterAll(() => {
  server.close()
});