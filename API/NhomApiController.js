import Nhom from "../Model/NhomModel";

const getAllNhom = async (req, res) => {
    let nhom = await Nhom.findAll()
    return res.status(200).json({
        Nhom: nhom
    })
}
export default { getAllNhom }