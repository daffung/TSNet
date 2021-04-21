/**
* @module routes
* @description
* Define all core routes of applications
*/

var express = require('express');
var router = express.Router();

const coreCtrl = require('../controllers').Core;

  router.route('/').get(coreCtrl.renderHomePage);
  router.route('/api/login').get(coreCtrl.UserLogin);
  router.route('/api/register').get(coreCtrl.UserRegister);
  router.route('/api/profile').get(coreCtrl.verifyToken,coreCtrl.GetUserProfile);
  router.route('/api/edit-profile').put(coreCtrl.verifyToken,coreCtrl.EditProfile);
module.exports = router;
