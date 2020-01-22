const db = require('../index');
const S = require("sequelize");

const Crypto = require('crypto')

class User extends S.Model {}
User.init(
    {
        email: {
            type: S.STRING,
            allowNull: false,
            validate: {
                isEmail:true 
            }
        },
        password: {
            type: S.STRING,
            allowNull: false
        }
    },{sequelize: db, modelName: "user"})

module.exports = User