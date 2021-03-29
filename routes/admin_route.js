const adminController = require('../controllers/admin_controller');

module.exports = (app) => {
    app.post('/login',
        adminController.postLogin);

    app.get('/login',
        adminController.getLogin);

}