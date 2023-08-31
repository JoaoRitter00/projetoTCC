const path = require("path");


//nome do arquivo ou diretorio atual
console.log(path.basename(__filename));//nome do arquivo
console.log(path.basename(__dirname));//nome da pasta

//nome do diretorio atual com ou sem pasta do arquivo
console.log(path.dirname(__dirname))//retorna o diretorio
console.log(path.dirname(__filename))//retorna a pasta no diretorio --*

//extensão de arquivo
console.log(path.extname(__filename))//dá o nome da extensão do arquivo

//criar objetos
console.log(path.parse(__filename))//dá as informações da raiz, diretorio, base, extensão e o nome do arquivo

//juntar caminhos de arquivos
console.log(path.join("Teste", "teste.html"))//junta dois caminhos para os arquivos selecionados

