const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/findyourservice", {
  logging: false,
//   force: false
});

module.exports = db;