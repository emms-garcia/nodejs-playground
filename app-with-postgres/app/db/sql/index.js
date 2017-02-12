const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

module.exports = {
    products: {
        add: sql('products/add.sql'),
    },
    users: {
        add: sql('users/add.sql'),
    },
};

function sql(file) {
    const fullPath = path.join(__dirname, file);
    const options = {
        minify: true,
        params: { schema: 'public' },
    };

    const qf = new QueryFile(fullPath, options);
    if (qf.error) {
        console.error(qf.error);
    }

    return qf;
};
