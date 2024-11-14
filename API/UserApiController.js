import UserModel from "../Model/UserModel";

const getAllUser = async (req, res) => {
    let users = await UserModel.getAllUser()
    res.status(200).json({
        users: users
    })
    res.render('home',
        {
            title: 'List Nhom',
            page: 'listUser',
            rows: userList,
        }
    )
}
const detailUser = async (req, res) => {
    let user = req.params.user
    let detailUsser = await UserModel.detailUser(user)
    return res.status(200).json({
        detailUsser
    })

}
export default { getAllUser, detailUser }