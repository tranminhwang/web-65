import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
        validate: {
            validator: function(v) {
              return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: props => `${props.value} is not a email!`
          },
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    mobile: {
        type: String,
        required: true,
        unique: true,
        default: '',
    },

    password: {
        type: String,
        required: true,
    }
});

export default mongoose.model('User', userSchema)