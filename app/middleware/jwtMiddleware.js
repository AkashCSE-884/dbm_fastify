async function authenticate(request, reply) {
    try {
        await request.jwtVerify();
    } catch (err) {
        reply.code(401).send({ error: 'Unauthorized User' });
    }
}


module.exports = {
    authenticate,
};