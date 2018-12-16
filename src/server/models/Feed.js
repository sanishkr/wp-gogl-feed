const mongoose    = require('mongoose');
const Schema = mongoose.Schema;

const FeedSchema = new Schema({
    images:{type:Array, default:[]},
    link:{
        linkURL:{
            type: String, default: '#'
        },
        islinkImage:{
            type: Boolean, default: false
        },
        imageHeight:{
            type: String, default: '100'
        },
        imageWidth:{
            type: String, default: '100'
        }
    },
    videos:{type:Array, default:[]},
    stats:{
        feedStatus:{
            type:String, default: true
        },
        createdAt:{
            type: Date, default: Date.now()
        }
    }
});

module.exports = mongoose.model('Feed',FeedSchema);