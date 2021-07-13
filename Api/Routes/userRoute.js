import express from 'express';
import expressAsyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt';

import User from '../Models/userModel.js';

//middlewares
import { loginValidation, registerValidation } from '../Middleware/userValidation.js';
import { generateToken } from '../Middleware/Helper.js'

const userRouter = express.Router();

userRouter.post(
    '/login',
    expressAsyncHandler(async (req, res) => {
    
        const { error } = loginValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message)
    
        const user = 
        const username = await User.findOne({ username: req.body.username })
        if (!username) return res.status(400).send('Username not found')

        const email = await User.findOne({ email: req.body.email });
        if (!email) return res.status(400).send('email not found')

        const validate = await bcrypt.compare(req.body.password, user.password)
        if (!validate) return res.status(400).send('Invalid password')

        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    isSeller: user.isSeller,
                    token: generateToken(user),
                });
                return;
            }
        }
        res.status(401).send({ message: 'Invalid email or password' });
    })
);

userRouter.post(
    '/register',
    expressAsyncHandler(async (req, res) => {

        const { error } = registerValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        const usernameExist = await User.findOne({ username: req.body.username })
        if (usernameExist) return res.status(400).send('Username already exists')

        const usernameExist = await User.findOne({ username: req.body.username })
        if (usernameExist) return res.status(400).send('Username already exists')

        const phonenumberExist = await User.findOne({ phonenumber: req.body.phonenumber })
        if (phonenumberExist) return res.status(400).send('Phone Number already exists')

        const salt = await bcrypt.genSalt(10)

        const hashpassword = await bcrypt.hash(req.body.password, salt)

        const user = new User({
            username: req.body.username,
            phonenumber: req.body.phonenumber,
            password: hashpassword
        });

        try {
            const createdUser = await user.save();
            res.send({
                _id: createdUser._id,
                name: createdUser.name,
                email: createdUser.email,
                isAdmin: createdUser.isAdmin,
                //   isSeller: user.isSeller,
                token: generateToken(createdUser),
            });
        } catch (error) {
            res.status(400).send(error)
        }

    })
);

export default userRouter;