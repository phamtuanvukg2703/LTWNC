const getHomePage = (req, res) => {
    return res.render("home",
        {
            title: 'Home website',
            page: 'main'
        }
    )
}
export default getHomePage