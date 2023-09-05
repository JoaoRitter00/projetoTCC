const mongoose = require("mongoose");

const connectToDatabase =
  async () => /*faz o codigo ficar asincrono, ou seja carregar depois*/ {
    try /* */ {
      mongoose.set("strictQuery", true);

      await mongoose.connect(
        //espera o banco de dados conectar
        `mongodb+srv://admin:ibLa4bgLeHivLDxa@cursonode.qdfoir2.mongodb.net/?retryWrites=true&w=majority`
      );
      console.log("conectado ao Banco");
    } catch (error) {
      //senha: ibLa4bgLeHivLDxa
      console.log(`Erro: ${error}`); //se der erro retorna o erro
    }
  };
module.exports = connectToDatabase;
