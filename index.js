const fastify = require('fastify')({ logger: true });
const fastifyJwt = require('fastify-jwt');
const ServiceContainer = require('./app/service_container/ServiceContainer');
const webRoutes = require('./app/route/webRoute');
const DbConnection = require('./app/dbconnection/DbConnection');
require('dotenv').config();



fastify.register(fastifyJwt, {
    secret: process.env.SECRET_KEY
});
fastify.decorate('services', ServiceContainer);

const dbConnection = new DbConnection();
fastify.services.register('dbConnection', dbConnection);



fastify.register(webRoutes);

// Start the server
fastify.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server is running on port 3000');
});