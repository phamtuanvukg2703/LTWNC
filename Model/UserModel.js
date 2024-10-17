import pool from '../connectDB';
const getAllUser = async () => {
    const [rows, fields] = await pool.execute("SELECT * FROM `users`")
    return rows
}
const createNewUser = () => {

}
export default { getAllUser, createNewUser }