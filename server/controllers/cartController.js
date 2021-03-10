

module.exports = {
    addToCart: async (req, res) => {
        if(!req.session?.user?.userId)return res.sendStatus(403)
        const db = req.app.get('db')
        const [cartInfo] = await db.get_cart(req.session.user.userId)
        const cart = await db.add_to_cart(req.body.cut_id, cartInfo.cart_id, req.body.qty)
        return res.status(200).send(cart)
    },

    removeFromCart: async (req,res) => {
        const db = req.app.get('db')
        const cart = await db.remove_from_cart(req.query.cart_id, req.query.cut_id)
        return res.status(200).send(cart)
    },

    editCartItem: (req, res) => {

    },

    checkOut: (req, res) => {

    },

    getCart: async (req, res) => {
        const db = req.app.get('db')
        const cart = await db.get_active_cart(req.session.user.userId)
        return res.status(200).send(cart)
    }

}