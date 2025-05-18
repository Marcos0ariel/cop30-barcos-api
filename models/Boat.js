const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Boat = sequelize.define("Boat",{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departure_time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Boat;