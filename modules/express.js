const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello World!</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Sullivan",
      email: "sullivan@bueno.com",
    },
    {
      name: "João",
      email: "joao@bueno.com",
    },
  ];

  res.status(200).json(users)
});

const port = 8080;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
