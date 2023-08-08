const express = require("express");

const app = express();
app.set("view engine", "hbs");
// установка пути к представлениям(вместо папки views будет использоваться папка templates)
app.set("views", "templates"); 
app.use("/contact", function (_, response) {
  response.render("contact.hbs", {
    title: "Мои контакты",
    emailsVisible: true,
    emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
    phone: "+1234567890",
  });
});

app.use("/", function (_, response) {
  response.send("Главная страница");
});
app.listen(3000);
