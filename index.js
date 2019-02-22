const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 63333;

app.use(express.static("public"));

app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

app.post("/reqJson", (request, response) => {
  response.sendFile(
    __dirname + "/public/assets/leveldata/" + request.body.fileName
  );
});

app.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
