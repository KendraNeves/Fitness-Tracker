let express = require("express");
let db = require("../models");
let router = require("./controllers/burger_controller.js");


var PORT = process.env.PORT || 3030;

var app = express();

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


