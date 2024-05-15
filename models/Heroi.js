import sequelize from "../database.js";
import { DataTypes } from "sequelize";

const Heroi = sequelize.define('Heroi', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    nome: {
        type: DataTypes.STRING
    },
    pontosDePoder: {
        type: DataTypes.FLOAT
    }
})

export  { Heroi }