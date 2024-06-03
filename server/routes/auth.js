const express = require('express');
const jwt = require("jsonwebtoken");
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const authUser = require('../middleware/authUser');





// Register a new user
router.post('/register', [
    body('firstName', 'Enter a valid first name').isLength({ min: 1 }),
    body('lastName', 'Enter a valid last name').isLength({ min: 1 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 1 }),
    body('phoneNumber', 'Enter a valid phone number')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, phoneNumber, password, role } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ $or: [{ email: email }] });
        if (user) {
            return res.status(400).json({ error: "Sorry, a user with this email  already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user with role set based on the provided 'role', default to 'client' if not provided
        user = await User.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            password: hashedPassword,
            isAdmin: false,
            role: role || 'client', // Use the provided 'role', or default to 'client'
        });

        // Generate JWT token
        const tokenPayload = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(tokenPayload, process.env.JWT_SECRET);

        res.status(201).json({ success: true, authToken, userID: user.id, role: user.role });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send("Internal server error");
    }
});

// login Route
router.post('/login', [

    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() })
    }

    const { email, password, } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {

            return res.status(400).send({ success, error: "User not found" })
        }
        const passComp = await bcrypt.compare(password, user.password)
        if (!passComp) {
            return res.status(400).send({ success, error: "Please try to login with correct credentials" })
        }

        const data = {
            user: {
                id: user._id
            }
        }

        const authToken = jwt.sign(data, process.env.JWT_SECRET)
        success = true
        res.send({ success, authToken })
    }
    catch (error) {
        res.status(500).send("Internal server error002")
    }
}
);
// logged in user details

router.get('/getuser', authUser, async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select("-password")
        success = true
        res.send(user)
        console.log(user.city);


    } catch (error) {
        res.status(400).send("Something went wrong")
    }
}
)


// update user details
router.put('/updateuser', authUser, async (req, res) => {
    const { userDetails } = req.body
    let convertData = JSON.parse(userDetails)
    try {
        const user = await User.findById(req.user.id)
        if (user) {
            let updateDetails = await User.findByIdAndUpdate(req.user.id, { $set: convertData })
            success = true
            res.status(200).send({ success })
        }
        else {
            return res.status(400).send("User Not Found")
        }
    } catch (error) {
        res.send("Something went wrong")
    }
})
module.exports = router