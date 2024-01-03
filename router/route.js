const Login = require('@controllers/userLogin')
const express = require('express')
const router = express.Router()
router.post('/login',Login)