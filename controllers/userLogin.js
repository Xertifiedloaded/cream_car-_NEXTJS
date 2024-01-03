const User = require('../models/user.schema')
const bcrypt = require('bcrypt')
const Login = async (req, res) => {
    try {
        const { userName, password } = req.body
        const user = await User.findOne({ userName })
        if (!user) {
            return res.status(400).json({ message: "usernot found" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "password does not match" })
        }
        res.status(200).json({ message: "user log in", user: user })
    } catch (error) {
        res.status(500).json({ message: "error loggin in", error: error })
        console.log(error)
    }
}
module.exports = Login