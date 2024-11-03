const contactPage = (req, res) => {
    return res.render("home",
        {
            title: 'Contact Website',
            page: 'contact',
        }
    )
}
export default contactPage