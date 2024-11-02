const aboutPage = (req, res) => {
    return res.render("home",
        {
            title: 'about Website',
            page: 'about',
            session: req.session
        }
    )
}
export default aboutPage