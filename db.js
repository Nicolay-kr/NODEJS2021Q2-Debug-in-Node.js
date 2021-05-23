const { Sequelize, DataTypes } = require('sequelize');//const Sequelize = require('sequelize');
const user = require("./models/user")
const game = require("./models/game")

require('dotenv').config();
                                //database username   password
const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: 5433,
})
const User = user(sequelize,DataTypes)
const Game = game(sequelize,DataTypes)

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)
module.exports = {sequelize,User,Game}
