const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

const router = express.Router();

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database!!"));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recipes");


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

