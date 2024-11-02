const getHomePage = (req, res) => {
    return res.render("home",
        {
            title: 'Home website',
            page: 'main',
            session: req.session
        }
    )
}
export default getHomePage