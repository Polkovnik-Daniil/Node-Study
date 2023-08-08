const express = require("express");

const app = express();
//Чтобы установить Handlebars в качестве движка представлений в Express, вызывается функция ниже:
app.set("view engine", "hbs");

app.use("/contact", function (_, response) {
  response.render("contact.hbs");
});

app.use("/", function (_, response) {
  response.send("Главная страница");
});

app.listen(3000);
