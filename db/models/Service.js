const db = require('../index');
const S = require("sequelize");

class Service extends S.Model { }
Service.init({
    title: {
        type: S.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: S.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
    },
    active: {
        type: S.BOOLEAN,
        allowNull: false
    }
},{ sequelize: db, modelName: "service"});

module.exports = Service