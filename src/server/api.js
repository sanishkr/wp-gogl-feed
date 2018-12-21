const express = require("express");
const app = express();
const apiRoute = express.Router();
const bodyParser = require('body-parser');
const cors = require("cors");
const Feed = require('./models/Feed');
const User = require('./models/User');

app.use(cors()); // to send CORS headers.
app.use(bodyParser.urlencoded({ extended: true })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

/**
 * Yet to make
 */
apiRoute.get("/addUser",(req,res)=>{
  // console.log(req)
  
  res.send(req.params)
});

/**
 * This API returns all feed based on user's email
 * sample request: http://localhost:3001/getAllFeedsbasedOnUser/sanishkr@gmail.com
 * sample response: [
  {
  _id: "5c16372c77d8589a420d54df",
  stats: {
  createdAt: "2018-02-25T10:52:38.265Z",
  feedStatus: true
  },
  videos: [ ],
  link: {
  imageWidth: "100",
  imageHeight: "100",
  islinkImage: false,
  linkURL: "https://pbs.twimg.com/profile_images/634744823522717696/GIsiyzHp_400x400.png"
  }
]
 */
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
});

/**
 * Yet to make
 */
apiRoute.post("/addFeed",(req,res)=>{
  //console.log(req.body)
  let msg = {"message":"Feed Added","status":true};
  res.send(msg)
});

app.use("/", apiRoute);
module.exports = app;
