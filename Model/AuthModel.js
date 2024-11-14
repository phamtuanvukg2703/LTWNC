import pool from '../connectDB';

const login = async (username) => {
    const [rows] = await pool.execute("SELECT * FROM `users` WHERE username=?", [username])
    return rows[0]
}

export default { login }