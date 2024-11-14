import express from 'express'
import UserApiController from '../API/UserApiController'
import NhomApiController from '../API/NhomApiController'
import SanphamApiController from '../API/SanphamApiController'

const router = express.Router()
const initAPIRoute = (app) => {
    router.get("/get-all-users", UserApiController.getAllUser)
    router.get("/detail-user/:user", UserApiController.detailUser)

    router.get("/get-all-nhom", NhomApiController.getAllNhom)

    router.get("/get-all-sanpham", SanphamApiController.getAllSanpham)

    return app.use("/api/v1", router)
}
export default initAPIRoute