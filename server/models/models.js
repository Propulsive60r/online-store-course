const sequelize = require('../db') // 1. Поключаем секвалайс
const {DataTypes} = require('sequelize') // 2. Из пакета секвлайс подключаем ДатаТайпс, описывает типы

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},

})
