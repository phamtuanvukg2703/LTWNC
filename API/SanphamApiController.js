import sanpham from "../Model/SanphamModel";

const getAllSanpham = async (req, res) => {
    let products = await sanpham.findAll();
    return res.status(200).json({
        sanpham: products
    })
}
export default { getAllSanpham }