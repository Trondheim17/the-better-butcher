const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const { firstName, lastName, email, password } = req.body
        console.log(email)
        const foundUser = await db.get_user_by_email(email)
        if (foundUser.length > 0) {
            return res.status(403).send('User already exists. Please login.')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.add_user([email, hash, firstName, lastName])
        const [cartId] = await db.create_cart(newUser.user_id)
        req.session.user = {
            userId: newUser.user_id,
            firstName: newUser.first_name,
            lastName: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
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
                userId: foundUser.user_id,
                firstName: foundUser.first_name,
                lastName: foundUser.last_name,
                email: foundUser.email,
                password: foundUser.password,
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