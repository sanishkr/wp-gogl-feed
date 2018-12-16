const express = require("express");
const app = express();
const apiRoute = express.Router();
const bodyParser = require('body-parser');
const cors = require("cors");
const Feed = require('./models/Feed');
const User = require('./models/User');

app.use(cors()); // to send CORS headers.
// app.use(express.urlencoded()); // to support URL-encoded bodies.
app.use(bodyParser.urlencoded({ extended: true })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

// let Feeds = [];
apiRoute.get("/addUser",(req,res)=>{
  // console.log(req)
  // User.find({"email" : "dfss@ddzff.dfa"},function(err,UserList){
  //   console.log(UserList);
  // });
  res.send(req.params)
});

apiRoute.get("/getAllFeedsbasedOnUser/:email",(req,res,next)=>{
  if (!req.params.email) {
    res.status(422).send({ error: 'Please choose any email' });
    return next();
  }
  var email = req.params.email;
  
  Feed.find({"email":email},function (err, FeedList) {
    if(FeedList){
        console.log(FeedList);
        res.json(FeedList);
    }else{
      console.log(err)
        res.json({
            success: false,
            data: {},
            code: 404
        });
    }
  });
  // res.send(JSON.stringify(Feeds.find({"_id":"5c16372c77d8589a420d54df"})));
});

apiRoute.post("/addFeed",(req,res)=>{
  //console.log(req.body)
  let m = req.body
  //Feeds.push(m)
  //console.log(Feeds)
  let msg = {"message":"Feed Added","status":true};
  res.send(msg)
  // res.send(m)
});

app.use("/", apiRoute);
module.exports = app;
