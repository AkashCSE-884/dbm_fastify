class ServiceContainer {
    constructor() {
        this.services = {};
    }

    register(key, service) {
        this.services[key] = service;
    }

    resolve(key) {
        return this.services[key];
    }
}

module.exports = new ServiceContainer();