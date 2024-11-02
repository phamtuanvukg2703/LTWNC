const contactPage = (req, res) => {
    return res.render("home",
        {
            title: 'Contact Website',
            page: 'contact',
            session: req.session
        }
    )
}
export default contactPage