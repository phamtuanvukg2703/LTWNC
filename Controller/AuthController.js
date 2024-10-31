import bcrypt from 'bcrypt'
import AuthModel from '../Model/AuthModel'


const getLogin = (req, res) => {
    res.render('home',
        {
            title: 'Đăng nhập',
            page: 'login'
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
            req.session.user = user;
            res.redirect('/user');
            console.log(req.session.user)
        } else {
            res.status(401).send('Sai mật khẩu');
        }
    } else {
        res.status(401).send('Người dùng không tồn tại');
    }
};
export default { getLogin, postLogin }