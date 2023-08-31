const fs = require("fs");
const path = require("path");

//criar pasta
fs.mkdir/*Criar uma pasta no path ->*/(path.join(__dirname, "/teste"), (error) => { /*função para acusar erros*/
  if (error) {
    return console.log("Erro: ", error);
  }
  console.log("Pasta criada com sucesso");
});

//criar arquivo
fs.writeFile( /*Cria um arquivo*/
  path.join(__dirname, "/teste", "teste.txt"),
  "hello node"/*<- escreve dentro do arquivo*/,
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criada com sucesso");

    fs.appendFile/*Modifica o arquivo*/(
      path.join(__dirname, "/teste", "teste.txt"),
      "hello world",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Arquivo modificado com sucesso");
      }
    ),
      fs.readFile(/*lê/imprime o arquivo*/
        path.join(__dirname, "/teste", "teste.txt"),
        "utf8",
        (error, data/*data = dados, parametro pré-setado, verifica se há dados*/) => {
          if (error) {
            return console.log("Erro: ", error);
          }
          console.log(data);
        }
      );
  }
);
