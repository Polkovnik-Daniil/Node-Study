const express = require("express");
const app = express();
 
app.use("/home/foo/bar", function (request, response) {
  response.sendStatus(404);
  console.log("SUCCESS_SENT_FILE");
});
 
app.listen(3000);