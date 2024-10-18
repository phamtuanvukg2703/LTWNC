import pool from '../connectDB';
const getAllUser = async () => {
    const [rows, fields] = await pool.execute("SELECT * FROM `users`")
    return rows
}
const createNewUser = () => {

}
const detailUser = async (user) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `users` WHERE username=?", [user])
    return rows[0]
}
export default { getAllUser, createNewUser, detailUser }