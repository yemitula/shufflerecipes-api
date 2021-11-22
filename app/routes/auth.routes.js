const {
  checkSignup
} = require('../middlewares');
const controller = require('../controllers/auth.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post(
    '/api/auth/signup',
    [
      checkSignup.checkDuplicateUsername,
      checkSignup.checkRolesExisted
    ],
    controller.signup
  );

  app.post('/api/auth/signin', controller.signin);
}