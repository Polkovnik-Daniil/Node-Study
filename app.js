const express = require("express");
const app = express();
 
app.use(function (request, response) {
  response.sendFile(__dirname + "/index.html");
  console.log("SUCCESS_SENT_FILE");
});
 
app.listen(3000);