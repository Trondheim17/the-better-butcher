

module.exports = {
    addToCart: (req, res) => {
        
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