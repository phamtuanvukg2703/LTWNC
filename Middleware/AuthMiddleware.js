const checkRole = (role) => {
    return (req, res, next) => {
        const { user } = req.session;
        const username = req.params.username;
        console.log(user.role)
        console.log(username)
        if (!user) {
            res.status(403).send("Bạn không có quyền truy cập trang này");
        }
        if (user.role === 0) {
            return next();
        }
        if (user.role === 1 && user.username === username) {
            return next();
        }
        res.status(403).send("Bạn không có quyền truy cập trang này");
    };
}
export default {
    checkRole
}