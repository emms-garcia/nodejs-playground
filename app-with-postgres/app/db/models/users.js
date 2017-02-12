const sql = require('../sql').users;

module.exports = (rep, pgp) => {
    return {
        add: name =>
            rep.one(sql.add, name, user => user),
        remove: id =>
            rep.result('DELETE FROM users WHERE id = $1', id, r => r.rowCount),
        find: id =>
            rep.oneOrNone('SELECT * FROM users WHERE id = $1', id),
        all: () =>
            rep.any('SELECT * FROM users'),
    };
};
