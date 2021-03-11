UPDATE cart_item
SET qty = $1
WHERE cart_id = $2 AND cut_id = $3