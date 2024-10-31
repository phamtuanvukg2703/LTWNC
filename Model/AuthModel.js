import connection from '../connectDB';

const login = async (username) => {
    const [rows] = await connection.execute("SELECT * FROM `users` WHERE username=?", [username])
    return rows[0]
}

export default { login }