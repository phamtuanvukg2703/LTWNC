import bcrypt from 'bcrypt'
import AuthModel from '../Model/AuthModel'


const getLogin = (req, res) => {
    res.render('home',
        {
            title: 'Đăng nhập',
            page: 'login',
            session: req.session
        }
    )
}
const postLogin = async (req, res) => {
    const { username, password } = req.body


    // console.log(req.body)
    const user = await AuthModel.login(username);

    if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            req.session.user = {
                username: user.username,
                fullname: user.fullname,
                role: user.role
            };
            res.redirect('/');
        } else {
            res.status(401).send('Sai mật khẩu');
        }
    } else {
        res.status(401).send('Người dùng không tồn tại');
    }
};
const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Đã xảy ra lỗi trong quá trình đăng xuất');
        }
        res.redirect('/login');
    });
};
export default { getLogin, postLogin, logout }