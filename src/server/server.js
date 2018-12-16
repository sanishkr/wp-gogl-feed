const app = require("./api");
const mongoose = require('mongoose');
const database = require('../resources/config');

mongoose.connect(database);

app.listen(3001, () => console.log("API is listening on port 3001!"));