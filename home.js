import habilidades from "./habilidades.js";
import capa from "./capa.js"
//let habilidadesOrdenados = modificador.ordenar(habilidades, "nome")  
//let habilidadesCapitalizados = modificador.capitalizar(habilidades, "nome")
let containerHabilidades = document.getElementById("container-habilidades")
let containerUser = document.getElementById("container-user")

for (let capas of capa) {
    let textHTML1 = `
    <div class="container-user"><div class="user">
    <img src="img/${capas.img}" alt="">
    <h1 class="nome-user">${capas.user}</h1>
    <p>${capas.competencias}</p>
    </div>
    
    </div>
    `
    containerUser.innerHTML += textHTML1
}
for (let habilidade of habilidades) {
    let textHTML2 = `
    <div class="habilidade">
    <img src="img/${habilidade.img}" alt="">
    <p class="nome-habilidade">${habilidade.nome}</p>
    </div>
    `
    containerHabilidades.innerHTML += textHTML2

}
