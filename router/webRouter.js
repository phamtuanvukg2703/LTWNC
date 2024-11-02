import express from 'express'
import getHomePage from '../Controller/HomeController'
import aboutPage from '../Controller/AboutController'
import contactPage from '../Controller/ContactController'
import UserController from '../Controller/UserController'
import AuthController from '../Controller/AuthController'

const router = express.Router()
const initWebRoute = (app) => {
    router.get('/', getHomePage)
    router.get('/about', aboutPage)
    router.get('/contact', contactPage)

    router.get('/user', UserController.getAllUser)
    router.get('/user/create', UserController.createUser)
    router.post('/user/create', UserController.createUser)
    router.get('/user/:username', UserController.detailUser)
    router.post("/user/delete/:username", UserController.deleteUser);
    router.get("/user/update/:username", UserController.updateUser);
    router.post("/user/update/:username", UserController.updateUser);

    router.get('/login', AuthController.getLogin);
    router.post('/login', AuthController.postLogin);
    router.get('/logout', AuthController.logout);

    return app.use('/', router)
}
export default initWebRoute