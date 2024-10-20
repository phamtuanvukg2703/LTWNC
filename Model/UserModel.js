import pool from '../connectDB';
import bcrypt from 'bcrypt'

const getAllUser = async () => {
    const [rows, fields] = await pool.execute("SELECT * FROM `users`")
    return rows
}
const createNewUser = async ({ username, fullname, password, address, sex, email }) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const [result] = await pool.execute("INSERT INTO users (username, password, fullname, address, sex, email) VALUES (?, ?, ?, ?, ?, ?)", [username, hashedPassword, fullname, address, sex, email])
    return result
}
const detailUser = async (user) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `users` WHERE username=?", [user])
    return rows[0]
}
function deleteUser(username) {
    return pool.execute("DELETE FROM `users` WHERE username = ?", [username])
}

export default { getAllUser, createNewUser, detailUser, deleteUser }