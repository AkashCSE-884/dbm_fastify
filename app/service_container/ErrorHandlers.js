class ErrorHandlers {

    async handleNotFound(request, reply) {
        reply.code(404).send({ error: 'Not Found page' });
    }

    async handleInternalServerError(request, reply) {
        reply.code(500).send({ error: 'Internal Server Error from custom' });
    }

}

module.exports = ErrorHandlers;