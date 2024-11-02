import UserModel from "../Model/UserModel";


const getAllUser = async (req, res) => {
    var userList = await UserModel.getAllUser()
    res.render('home',
        {
            title: 'List User',
            page: 'listUser',
            rows: userList,
            session: req.session
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
    const user = req.params.username
    const dataUser = await UserModel.detailUser(user)
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
const updateUser = async (req, res) => {
    if (req.method === "GET") {
        const username = req.params.username;
        const user = await UserModel.detailUser(username);
        res.render("home", {
            title: "Update User Page ",
            page: "updateUser",
            rows: user,
        });
    } else if (req.method === "POST") {
        const { username, fullname, address, sex, email } = req.body;
        const result = await UserModel.updateUser({ fullname, address, sex, email, username });
        console.log(result);
        res.redirect("/user");
    }
};
export default { getAllUser, createUser, detailUser, deleteUser, updateUser }