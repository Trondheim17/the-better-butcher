

module.exports = {
    addToCart: async (req, res) => {
        if(!req.session?.user?.userId)return res.sendStatus(403)
        const db = req.app.get('db')
        const cart = await db.add_to_cart(req.body.item_id, req.body.cart_id, req.body.qty)
        return res.status(200).send(cart)
    },

    removeFromCart: (req,res) => {

    },

    editCartItem: (req, res) => {

    },

    checkOut: (req, res) => {

    },

    getCart: async (req, res) => {
        const db = req.app.get('db')
        console.log(req.session.user.userId)
        const cart = await db.get_active_cart(req.session.user.userId)
        return res.status(200).send(cart)
    }

}