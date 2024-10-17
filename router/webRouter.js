import express from 'express'
import getHomePage from '../Controller/HomeController'
import aboutPage from '../Controller/AboutController'
import contactPage from '../Controller/ContactController'
import UserController from '../Controller/UserController'
const router = express.Router()
const initWebRoute = (app) => {
    router.get('/', getHomePage)
    router.get('/about', aboutPage)
    router.get('/contact', contactPage)
    router.get('/user', UserController.getAllUser)
    router.get('/user/create', UserController.createUser)
    return app.use('/', router)
}
export default initWebRoute