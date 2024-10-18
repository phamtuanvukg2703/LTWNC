import UserModel from "../Model/UserModel";
const getAllUser = async (req, res) => {
    var userList = await UserModel.getAllUser()
    res.render('home',
        {
            title: 'List User',
            page: 'listUser',
            rows: userList
        }
    )
}
const createUser = (req, res) => {
    res.render('home',
        {
            title: "Create New User",
            page: "createNewUser"
        }
    )
}
const detailUser = async (req, res) => {
    // if (isAuthentication(req, res) == true) {
    var user = req.params.username
    var dataUser = await UserModel.detailUser(user)
    res.render('home',
        {
            title: "Detail User",
            page: "detailUser",
            rows: dataUser
        }
    )
    // }
}
export default { getAllUser, createUser, detailUser }