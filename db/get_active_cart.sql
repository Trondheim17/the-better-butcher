-- SELECT * FROM cart
-- LEFT JOIN cart_item ON cart.cart_id = cart_item.cart_id
-- JOIN items ON cart_item.cut_id = items.cut_id
-- WHERE cart.user_id = $1 AND cart.active = true;

SELECT * FROM cart_item
JOIN cart ON cart.cart_id =  cart_item.cart_id
JOIN items ON items.cut_id = cart_item.cut_id
WHERE cart.user_id = $1 AND cart.active = true;
