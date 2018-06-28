'use strict';

const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 8
    },
    editable: {
        type: Boolean,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;