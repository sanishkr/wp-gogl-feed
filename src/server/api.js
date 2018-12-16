const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); // to send CORS headers.
app.use(express.urlencoded()); // to support URL-encoded bodies.
app.use(express.json()); // to support JSON-encoded bodies.

let Feeds = [];

app.get("/", (_req, res) =>
  res.send(`
  <span>Hello API</span>
  `)
);

app.get("/addUser",(req,res)=>{
  // console.log(req)
  res.send(Feeds)
});

app.get("/getAllFeedsbasedOnUser",(req,res)=>{
  // console.log(req)
  let Feeds = [
    {
      "text":"some text",
      "images":[
        "url1",
        "url2"
      ],
      "links":[
        {
          "link1":{
            "URL":"sampleurl"
          }
        }
      ],
      "videos":[],
      "stats":{

      }
    }
  ];
  res.send(Feeds)
});

app.post("/addFeed",(req,res)=>{
  //console.log(req.body)
  let m = req.body
  Feeds.push(m)
  //console.log(Feeds)
  let msg = {"message":"Feed Added","status":true};
  res.send(msg)
  // res.send(m)
});

module.exports = app;
