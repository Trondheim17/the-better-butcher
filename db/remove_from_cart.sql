DELETE FROM cart_item
WHERE cart_id = $1 AND cut_id = $2;