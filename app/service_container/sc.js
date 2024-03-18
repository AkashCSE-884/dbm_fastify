class ServiceContainer {
    constructor() {
        this.instances = {};
    }

    register(key, instance) {
        this.instances[key] = instance;
    }

    resolve(key) {
        return this.instances[key];
    }
}

module.exports = new ServiceContainer();