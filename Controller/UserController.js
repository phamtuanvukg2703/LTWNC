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
const createUser = async (req, res) => {
    if (req.method === "GET") {
        res.render('home',
            {
                title: "Create New User",
                page: "createNewUser"
            }
        )
    }
    if (req.method === "POST") {
        const data = req.body
        const result = await UserModel.createNewUser(data);
        console.log(result);
        res.redirect("/user");
    }
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
const deleteUser = async (req, res) => {
    if (req.method === "POST") {
        const username = req.body.username;
        const result = await UserModel.deleteUser(username);
        console.log(result);
        res.redirect("/user");
    }
};
export default { getAllUser, createUser, detailUser, deleteUser }