const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    tumbnail:String,
    company:String,
    price: Number,
    techs: [String],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }    

});

module.exports = mongoose.model('Spot', UserSchema);
