const productHandler = require('./handlers/product-handler');

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/products',
        handler: productHandler.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/products/{id}',
        handler: productHandler.find
    },
    {
        method: 'POST',
        path: '/api/v1/products',
        handler: productHandler.save
    },
    {
        method: 'PUT',
        path: '/api/v1/products',
        handler: productHandler.update
    },
    {
        method: 'DELETE',
        path: '/api/v1/products/{id}',
        handler: productHandler.remove
    }
]