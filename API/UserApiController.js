import UserModel from "../Model/UserModel";

const getAllUser = async (req, res) => {
    let users = await UserModel.getAllUser()
    return res.status(200).json({
        users: users
    })
}
const detailUser = async (req, res) => {
    let user = req.params.user
    let detailUsser = await UserModel.detailUser(user)
    return res.status(200).json({
        detailUsser
    })
}
export default { getAllUser, detailUser }