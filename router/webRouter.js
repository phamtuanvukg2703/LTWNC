import express from 'express'
import getHomePage from '../Controller/HomeController'
import aboutPage from '../Controller/AboutController'
import contactPage from '../Controller/ContactController'
import UserController from '../Controller/UserController'
import AuthController from '../Controller/AuthController'
import AuthMiddleware from '../Middleware/AuthMiddleware'
import CategoryController from '../Controller/CategoryController'
const router = express.Router()
const initWebRoute = (app) => {
    router.get('/', getHomePage)
    router.get('/about', aboutPage)
    router.get('/contact', contactPage)

    router.get('/user', AuthMiddleware.checkRole("0"), UserController.getAllUser)
    router.get('/user/create', AuthMiddleware.checkRole("0"), UserController.createUser)
    router.post('/user/create', AuthMiddleware.checkRole("0"), UserController.createUser)

    router.get('/nhom', AuthMiddleware.checkRole("0"), CategoryController.showAllNhom)


    router.get('/user/:username', AuthMiddleware.checkRole(["0", "1"]), UserController.detailUser)
    router.post("/user/delete/:username", AuthMiddleware.checkRole(["0", "1"]), UserController.deleteUser);
    router.get("/user/update/:username", AuthMiddleware.checkRole(["0", "1"]), UserController.updateUser);
    router.post("/user/update/:username", AuthMiddleware.checkRole(["0", "1"]), UserController.updateUser);

    router.get('/login', AuthController.getLogin);
    router.post('/login', AuthController.postLogin);
    router.get('/logout', AuthController.logout);

    return app.use('/', router)
}
export default initWebRoute