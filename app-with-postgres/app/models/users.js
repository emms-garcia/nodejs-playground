module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users', {
        name: DataTypes.STRING,
    }, {
        classMethods: {},
        timestamps: false,
    });
};
