var http = require("http");
 
http.createServer(function(request, response){
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if(request.url === "/"){
        response.statusCode = 302; // временная переадресация
        // на адрес localhost:3000/newpage
        response.setHeader("Location", "/newpage");
    } 
    if(request.url === "/home"){
        response.write("<h2>Home</h2>");
    }
    else if(request.url == "/about"){
        response.write("<h2>About</h2>");
    }
    else if(request.url == "/contact"){
        response.write("<h2>Contacts</h2>");
    }
    else if(request.url == "/newpage"){
        response.write("New address");
    }
    else{
        response.statusCode = 404; // адрес не найден
        response.write("<h2>Not found</h2>");
    }

    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Library</title>");
    response.write("<meta charset=\"utf-8\" />");
    response.write("</head>");
    response.write("<body><h2>Привет миг</h2></body>");
    response.write("</html>");
    response.end();

    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
     
    response.end();
}).listen(3000);