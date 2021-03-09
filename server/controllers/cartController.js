

module.exports = {
    addToCart: async (req, res) => {
        const db = req.app.get('db')
        const cart = await db.add_to_cart(req.item_id, req.cart_id)
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
        const cart = await db.get_active_cart(req.session.user.user_id)
        console.log(cart)
        return res.status(200).send(cart)
    }

}