const Middleware = require('../middleware/jwtMiddleware');
const Router = require('./Router');

async function webRoutes(fastify, opts, done) {
    const router = new Router(fastify);

    fastify.decorate('authenticate', Middleware.authenticate);


    fastify.get('/home/:country', { preValidation: [fastify.authenticate] }, router.createRouteHandler('HomeController', 'index'));

    fastify.post('/signup', (req, reply) => {

        const token = fastify.jwt.sign({ "id": req.body.user_id }, { expiresIn: '1h' })
        reply.send({ token })
    })
    done();
}

module.exports = webRoutes;