const sql = require('../sql').products;

module.exports = (rep, pgp) => {
    return {
        add: values => rep.one(sql.add, values, user => user),
        remove: id =>
            rep.result('DELETE FROM products WHERE id = $1', id, r => r.rowCount),
        find: id =>
            rep.oneOrNone('SELECT * FROM products WHERE id = $1', id),
        all: () =>
            rep.any('SELECT * FROM products'),
    };
};
