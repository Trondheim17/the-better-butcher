module.exports = {
    getItems: async (req, res) => {
        const db = req.app.get('db')
        const items = await db.get_all_items()
        return res.status(200).send(items)
    },

    getItem: async (req, res) => {
        const db = req.app.get('db')
        const item = await db.get_item_by_id(req.cut_id)
        return res.status(200).send(item)
    }
}