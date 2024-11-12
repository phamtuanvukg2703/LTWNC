import UserModel from "../Model/UserModel";

const getAllUser = async (req, res) => {
    let users = await UserModel.getAllUser()
    return res.status(200).json({
        errCode: 1,
        message: "Sucess",
        users: users
    })
}
const detailUser = async (req, res) => {
    let user = req.params.user
    let data = await UserModel.detailUser(user)
    return res.status(200).json({
        errCode: 1,
        message: "Sucess",
        users: data
    })
}
export default { getAllUser, detailUser }