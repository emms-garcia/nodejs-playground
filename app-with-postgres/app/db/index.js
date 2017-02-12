const promise = require('bluebird');

const models = {
    products: require('./models/products'),
    users: require('./models/users'),
};

const options = {
    promiseLib: promise,
    extend: obj => {

        // Do not use 'require()' here, because this event occurs for every task
        // and transaction being executed, which should be as fast as possible.
        obj.products = models.products(obj, pgp);
        obj.users = models.users(obj, pgp);
    }
};

const pgp = require('pg-promise')(options);
const db = pgp('postgres://postgres:@db:5432/postgres');
// pgp.pg.defaults.poolSize = 20;

module.exports = db;
