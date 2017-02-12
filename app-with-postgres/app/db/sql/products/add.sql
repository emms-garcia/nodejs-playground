INSERT INTO ${schema~}.products(user_id, name)
VALUES(${user_id}, ${name})
RETURNING id, name
