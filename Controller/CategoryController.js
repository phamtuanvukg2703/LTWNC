import Nhom from "../Model/NhomModel";

const showAllNhom = async (req, res) => {
    var nhomList = await Nhom.findAll()
    res.render('home',
        {
            title: 'List Nhom',
            page: 'listnhom',
            rows: nhomList,
        }
    )
}
export default { showAllNhom }