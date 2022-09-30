require('dotenv').config() //подключаем для работы с окружением

const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000 //забираем переменную с окружения .env
const app = express()

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

