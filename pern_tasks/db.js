const Pool = require("pg").Pool;
const pool = new Pool({
    user:"postgres",
    password: "Stronger@07",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;