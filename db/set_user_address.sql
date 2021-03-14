UPDATE users
SET ship_to_address = $1,
ship_to_city = $2,
ship_to_state = $3,
ship_to_zip = $4,
bill_to_address = $5,
bill_to_city = $6,
bill_to_state = $7,
bill_to_zip = $8
WHERE user_id = $9
RETURNING *;