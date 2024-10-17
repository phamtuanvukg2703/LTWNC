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
export default { getAllUser, createUser }