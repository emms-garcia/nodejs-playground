const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:@db:5432/postgres');
module.exports = {
    Products: require('./products')(sequelize, Sequelize),
    Users: require('./users')(sequelize, Sequelize),
};
