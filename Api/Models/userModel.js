import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            trim: true,
        },
        username: {
            type: String,
            unique: true,
            trim: true,
        },
        phonenumber: {
            type: Number,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            trim: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
            required: true
        },

    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
export default User