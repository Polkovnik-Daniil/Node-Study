const express = require("express");
const app = express();

//Такой маршрут будет соответствовать строке запроса "/bk" или "/bok".
app.get("/bo?k", function (request, response) {
    response.send(request.url)
});
//Такой маршрут будет соответствовать запросам "/bok", "/book", "/boook" и так далее.
app.get("/bo+k", function (request, response) {
    response.send(request.url)
});
//Такой маршрут будет соответствовать запросам "/bork", "/bonk", "/bor.dak", "/bor/ok" и так далее.
app.get("/bo*k", function (request, response) {
    response.send(request.url)
});
//Выражение (.html)? указывает, что подстрока ".html" может встречаться или отсутствовать в строке запроса. И такой маршрут будет соответствовать запросам "/book" и "/book.html".
app.get("/book(.html)?", function (request, response) {
    response.send(request.url)
});
//необходимо перехватить запрос ко всем файлам html или всем путям, которые в конце имеют ".html"(Это регулярное выражение).
app.get(/.*(\.)html$/, function (request, response) {
    response.send(request.url)
});

// обработка запроса по адресу /about
app.get("/about", function(request, response){
     
    response.send("<h1>О сайте</h1>");
});
 
// обработка запроса по адресу /contact
app.use("/contact", function(request, response){
     
    response.send("<h1>Контакты</h1>");
});
 
// обработка запроса к корню веб-сайта
app.get("/", function(request, response){
     
    response.send("<h1>Главная страница</h1>");
});
app.listen(3000);