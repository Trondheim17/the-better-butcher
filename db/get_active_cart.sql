SELECT * FROM cart
WHERE user_id AND active = true
RETURNING cart_id;