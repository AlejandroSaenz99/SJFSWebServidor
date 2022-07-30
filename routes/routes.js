const express = require('express');
const router = express.Router();
const routesController = require('./routesController')

const middleware = require('../public/js/middleware/middlewares');
var passport = require('passport');


router.get('/', routesController.index_GET);
router.get('/login', routesController.login_GET);
router.get('/register', routesController.register_GET);
router.get('/profile',middleware.isLoggedIn, routesController.profile_GET);
router.get('/Diesel',middleware.isLoggedIn, routesController.Diesel);
router.get('/consultas',middleware.isLoggedIn, routesController.Consultas);
router.get('/admin',middleware.isLoggedIn, routesController.Administrador);
router.post('/add',middleware.isLoggedIn,routesController.save);
router.post('/addDiesel',middleware.isLoggedIn,routesController.saveDiesel);
router.get('/ver',middleware.isLoggedIn,routesController.list2);
router.get('/delete/:Id',middleware.isLoggedIn,routesController.Delete);
router.get('/deleteDiesel/:Id',middleware.isLoggedIn,routesController.DeleteDiesel);
router.get('/update/:Id',middleware.isLoggedIn,routesController.Edit);
router.get('/updateDiesel/:Id',middleware.isLoggedIn,routesController.EditDiesel);
router.post('/update/:Id',middleware.isLoggedIn,routesController.Update);
router.post('/updateDiesel/:Id',middleware.isLoggedIn,routesController.UpdateDiesel);
 router.post('/buscar',middleware.isLoggedIn,routesController.buscar);
 router.post('/buscarEspecifico',middleware.isLoggedIn,routesController.buscarEspecifico);
 router.post('/buscarTodo',middleware.isLoggedIn,routesController.buscarTodo);
 router.post('/addViaje',middleware.isLoggedIn,routesController.saveViaje);


router.get('/logout', routesController.logout_GET);

router.post('/login',passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
})
, routesController.login_POST);
router.get('/register',passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
}), routesController.register_GET);




module.exports = router;