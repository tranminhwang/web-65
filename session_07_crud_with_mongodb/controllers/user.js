import mongoose from "mongoose";
import User from '../models/user.js'


const getAllUsers = (req, res) => {
    User.find({}).then((data) => {
        res.json(data);
    });
}

const createUser = async (req, res) => {
    // const user = new User({
    //     name: 'name 1',
    //     email: 'email 1',
    //     mobile: 'mobile 1',
    //     password: 'password 1',
    // })
    // user.save()

    const user = await User.create({
        name: 'name2',
        email: 'email1@gmail.com',
        mobile: 'mobile2',
        password: 'password2',
    });
    res.json(user);
    
};


export {getAllUsers,createUser};