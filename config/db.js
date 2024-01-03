const express = require('express')
const app = express()
const dotEnv = require("dotenv")
const mongoose = require('mongoose')
dotEnv.config()
const URL = process.env.PORT
const connectDB = async () => {
    await mongoose.connect(URL)
    try {
        coonsolee.log("connected to Db")
    } catch (error) {
        console.log(error.message)
        console.log("not connected to DB")
    }
}
modules.export = connectDB
