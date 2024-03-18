class Router {
    constructor(fastify) {
        if (Router.instance) {
            return Router.instance;
        }

        this.fastify = fastify;
        this.services = fastify.services || {}; // Service container
        this.controllers = {};

        Router.instance = this;
    }
    createRouteHandler(controllerName, methodName) {
        return async(request, reply) => {
            this.autoRegisterController(controllerName);
            const controller = this.resolveService(controllerName);
            return controller[methodName](request, reply);
        };
    }

    resolveService(serviceName) {

        if (!this.services.services[serviceName]) {
            throw new Error(`Service '${serviceName}' not registered.`);
        }
        return this.services.resolve(serviceName);
    }

    autoRegisterController(controllerName) {

        if (!this.controllers[controllerName]) {
            const ControllerClass = require(`../controllers/${controllerName}`);

            const controller = new ControllerClass(this.fastify.services);
            this.controllers[controllerName] = controller;


            // const serviceKey = controllerName.charAt(0).toLowerCase() + controllerName.slice(1);
            // console.log(`Auto-registering controller: ${JSON.stringify(controller)}`);


            if (!this.services[controllerName]) {
                this.services.register(controllerName, controller);

            }
        }

    }
}

module.exports = Router;