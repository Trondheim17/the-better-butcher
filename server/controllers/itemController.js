module.exports = {
    getItems: (req, res) => {
        const db = req.app.get('db')
        const items = db.get_all_items()
        return res.status(200).send(items)
    },

    getItem: (req, res) => {
        const db = req.app.get('db')
        const item = db.get_item_by_id(req.cut_id)
        return res.status(200).send(item)
    }
}