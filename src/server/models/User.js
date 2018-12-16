const mongoose    = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    googleId:{type:String, default:'', required:true},
    name:{type:String, default:''},
    email:{type:String, default:'', required:true},
    imageURL:{type:String, default:''},
    stats:{
        accountStatus:{
            type:Boolean, default: false
        },
        createdAt:{
            type: Date, default: Date.now()
        }
    }
});


module.exports = mongoose.model('User',UserSchema);