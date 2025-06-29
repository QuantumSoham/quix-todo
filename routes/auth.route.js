const router = require("express").Router();
const User = require("../models/user.models.js");
const bcrypt = require("bcrypt");

// sign up
router.post("/register", async (req, res) => {
    try {
        // console.log(req.body);
        const { email, username, password } = req.body;
        // console.log(email);
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            res.status(400).json({ message: "User Already exists" });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email: email, username: username, password: hashedPassword });
        await user.save();
        res.status(200).json({ user: user });
    } catch (error) {
        res.status(400).json({ message: error.message||"Registration failed." });
    }
});

// sign in
router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json({ message: "Please Sign up!" });
            return;
        }

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect) {
            res.status(400).json({ message: "Invalid Password!" });
            return;
        }
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Please try again later." });
    }
});

module.exports =router;