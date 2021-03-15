UPDATE cart
SET active = FALSE,
date = NOW()
WHERE cart_id = $1 AND user_id = $2;