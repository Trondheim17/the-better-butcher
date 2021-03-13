SELECT * FROM cart_item
JOIN cart ON cart.cart_id =  cart_item.cart_id
JOIN items ON items.cut_id = cart_item.cut_id
WHERE cart.user_id = $1 AND cart.active = true
UPDATE cart_item
SET active = false
SET date = NOW()
WHERE cart_id = $1 AND user_id = $2