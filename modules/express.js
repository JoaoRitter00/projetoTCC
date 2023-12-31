const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors())
app.use(express.json())
app.get('/casa',(req, res)=>{
    res.status(200).send("<h1>Hello World</h1>");
})

app.get('/users',(req, res)=>{
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
      res.status(200).json(users)
})

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));