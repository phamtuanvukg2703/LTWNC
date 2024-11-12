import express from 'express'
import UserApiController from '../API/UserApiController'

const router = express.Router()
const initAPIRoute = (app) => {
    router.get("/get-all-users", UserApiController.getAllUser)
    router.get("/detail-user/:user", UserApiController.detailUser)

    return app.use("/api/v1", router)
}
export default initAPIRoute