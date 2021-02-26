const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const { email, username, password } = req.body
        const foundUser = await db.get_user_by_email(email)
        if (foundUser) {
            return res.status(403).send('User already exists. Please login.')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.add_user([email, username, hash])
        const [cartId] = await db.create_cart(newUser.user_id)
        req.session.user = {
            userId: newUser.user_id,
            email: newUser.email,
            username: newUser.username,
            cartId
        }
        res.status(200).send(req.session.user)
    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const { email, password } = req.body
        const [foundUser] = await db.get_user_by_email(email)
        if (!foundUser) {
            return res.status(404).send('Login failed. Please try again.')
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password)
        if (authenticated) {
            req.session.user = {
                userId: newUser.user_id,
                email: newUser.email,
                username: newUser.username,
                cartId: null
            }
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send('Login failed. Please try again.')
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(404).send('Please Log In')
        }
    }
}