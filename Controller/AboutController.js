const aboutPage = (req, res) => {
    return res.render("home",
        {
            title: 'about Website',
            page: 'about',
        }
    )
}
export default aboutPage