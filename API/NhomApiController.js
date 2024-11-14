import Nhom from "../Model/NhomModel";

const getAllNhom = async (req, res) => {
    let nhoms = await Nhom.findAll()
    return res.status(200).json({
        Nhom: nhoms
    })
}
export default { getAllNhom }