const app = require("./api");
const mongoose = require('mongoose');
const config = require('../resources/config');

mongoose.connect(config.database, { useMongoClient: true });

app.listen(3001, () => console.log("API is listening on port 3001!"));
