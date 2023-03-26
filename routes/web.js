const express = require('express')
const AdminController = require('../controllers/admin/AdminController')
const PropertyController = require('../controllers/admin/PropertyController')
const SliderController = require('../controllers/admin/SliderController')
const FrontController = require('../controllers/FrontController')
const UserController = require('../controllers/user/UserController')
const router = express.Router()


//front controller
router.get('/',FrontController.home)
router.get('/about',FrontController.about)
router.get('/property',FrontController.property)
router.get('/blog',FrontController.blog)
router.get('/contact',FrontController.contact)
router.get('/property-detail/:id',FrontController.propertyDetail)
router.get('/sliderproperty-detail/:id',FrontController.sliderPropertyDetail)
router.get('/blog-detail',FrontController.blogDetail)
router.get('/agent-detail',FrontController.agentDetail)
router.get('/login',FrontController.login)
router.get('/register',FrontController.register)



//admin controller
router.get('/admin/dashboard',AdminController.dashboard)



//slider controller
router.get('/admin/dashboard/slider',SliderController.sliderDisplay)
router.post('/sliderinsert',SliderController.sliderInsert)
router.get('/admin/dashboard/sliderview/:id',SliderController.sliderView)
router.get('/sliderdelete/:id',SliderController.sliderDelete)
router.get('/admin/dashboard/slideredit/:id',SliderController.sliderEdit)
router.post('/sliderupdate/:id',SliderController.sliderUpdate)



//property controller
router.get('/admin/dashboard/property',PropertyController.property)
router.post('/propertyinsert',PropertyController.propertyInsert)
router.get('/admin/dashboard/propertyview/:id',PropertyController.propertyView)
router.get('/admin/dashboard/propertyedit/:id',PropertyController.propertyEdit)
router.get('/propertydelete/:id',PropertyController.propertyDelete)
router.post('/propertyupdate/:id',PropertyController.propertyUpdate)
router.get('/singleimagedelete/:id/front-image/:public_id',PropertyController.singleImageDelete)


// usercontroller 
router.post('/userregister',UserController.userRegister)
router.get('/verify/:id',UserController.verify)
router.post('/verifyotp/:id',UserController.verifyOtp)
router.get('/sendemail',UserController.sendEmail)



module.exports = router