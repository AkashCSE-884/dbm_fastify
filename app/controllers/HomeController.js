const Controller = require("./Controller");

class HomeController extends Controller {
    constructor(serviceContainer) {
        super(serviceContainer);
        this.p = 5;
    }

    async index(request, reply) {
        try {
            // const result = await dbConnection.query(sql);

            const result = await this.services.dbConnection.callStoredFunction('plan.filter_paginate', { "country": request.params.country })
            reply.send(result);
        } catch (error) {
            reply.code(500).send('Error fetching data from the database.');
        }
    }

    async name(request, reply) {
       
        console.log("hc", this.p)
        const data = { message: 'Hello from HomeController!' };
        return reply.send(data);

    }
}

module.exports = HomeController;