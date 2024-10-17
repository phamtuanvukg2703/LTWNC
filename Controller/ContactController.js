const contactPage = (req, res) => {
    return res.render("home",
        {
            title: 'Contact Website',
            page: 'vu@abc.com.vn'
        }
    )
}
export default contactPage