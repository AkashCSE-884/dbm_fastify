class Controller {
    constructor(serviceContainer) {
        this.services = serviceContainer.services;
    }

    // render(viewName, data) {

    // }
    // renderView(viewName) {
    //     const viewPath = path.join(__dirname, '../views', viewName);
    //     return fs.readFileSync(viewPath, 'utf8');
    // }
}

module.exports = Controller;