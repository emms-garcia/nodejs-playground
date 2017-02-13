module.exports = function (sequelize, DataTypes) {
    return sequelize.define('products', {
        name: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
    }, {
        classMethods: {},
        timestamps: false,
    });
};
