const express = require("express");
const app = express();
//302 можно использовать вместо 301
app.use("/",function(request, response){
    response.redirect(301, "/about");
});
app.use("/index", function (request, response) {
  response.redirect("https://www.youtube.com/");
});
app.use("/home/bar", function (request, response) {
  response.redirect("about");
});
app.use("/home/about", function (request, response) {
  response.send("<h1>About OTHER</h1>");
});
app.use("/home", function (request, response) {
  response.redirect("about");
});
app.use("/about", function (request, response) {
  response.send("<h1>About MAIN</h1>");
});
//Переадресация относительно текущего адреса на адрес на том же уровне:
app.use("/home/f/bar", function (request, response) {
  response.redirect("./about");
});
//Здесь идет переадресация с http://localhost:3000/home/f/bar на http://localhost:3000/home/f/about
app.use("/home/fo/bar", function (request, response) {
  response.redirect("../about");
});

//Здесь идет переадресация с http://localhost:3000/home/foo/bar на http://localhost:3000/home/foo
app.use("/home/foo/bar", function (request, response) {
  response.redirect(".");
});
//Здесь идет переадресация с http://localhost:3000/home/foo/bar на http://localhost:3000/home
app.use("/home/fooo/bar", function (request, response) {
  response.redirect("..");
});
app.listen(3000);
