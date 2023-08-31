const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/post") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>vai toma no cu saulo</h1><p>geovana vai si fuder</p>");//Somente String
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "John Doe",
        email: "john@doe.com",
      },
      {
        name: "Jane Doe",
        email: "jane@doe.com",
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));// Somente String
  }

});

server.listen(port, () => console.log(`Rodando na porta ${port}!`));