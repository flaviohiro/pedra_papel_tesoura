let indice = 0
// numJogo = 1 -> tesoura
// numJogo = 2 -> papel
// numJogo = 3 -> pedra
function jogar(){
    let botaoTesouraJS = document.getElementById("selectTesoura")
    let botaoPapelJS = document.getElementById("selectPapel");
    let botaoPedraJS = document.getElementById("selectPedra");
    botaoTesouraJS.style.backgroundColor="";
    botaoPapelJS.style.backgroundColor="";
    botaoPedraJS.style.backgroundColor="";
    let numJogo = Math.floor(Math.random()* (3 - 1 + 1)) + 1;
   if (indice == 1 && numJogo == 1){
        alert("Tesoura X Tesoura");
        alert("Empatou");
    } else if(indice == 1 && numJogo== 2){
        alert("Tesoura X Papel");
        alert("Você ganhou");
    } else if (indice == 1 && numJogo == 3){
        alert("Tesoura X Pedra");
        alert("Você perdeu")
    } else if (indice == 2 && numJogo == 1){
        alert("Papel X Tesoura");
        alert("você perdeu");
    } else if (indice == 2 && numJogo == 2){
        alert("Papel X Papel");
        alert("Empatou");
    } else if (indice == 2 && numJogo == 3){
        alert("Papel X Pedra");
        alert("Você ganhou");
    } else if(indice == 3 && numJogo == 1){
        alert("Pedra X Tesoura");
        alert ("Você ganhou");
    } else if(indice == 3 && numJogo == 2){
        alert("Pedra X Papel");
        alert('você perdeu');
    } else if(indice == 3 && numJogo==3){
        alert('Pedra X Pedra');
        alert('Empatou');
    } else {
        alert("Selecione Pedra, Papel ou Tesoura ");
    }
}

function tesoura(){
    let botaoTesouraJS = document.getElementById("selectTesoura")
    let botaoPapelJS = document.getElementById("selectPapel");
    let botaoPedraJS = document.getElementById("selectPedra");
    botaoTesouraJS.style.backgroundColor="rgb(198, 185, 185)";
    botaoPapelJS.style.backgroundColor="";
    botaoPedraJS.style.backgroundColor="";
    indice = 1;
}

function papel(){
    let botaoPapelJS = document.getElementById("selectPapel");
    let botaoTesouraJS = document.getElementById("selectTesoura")
    let botaoPedraJS = document.getElementById("selectPedra");
    botaoPapelJS.style.backgroundColor="rgb(198, 185, 185)"
    botaoPedraJS.style.backgroundColor="";
    botaoTesouraJS.style.backgroundColor='';
    indice = 2;
}

function pedra(){
    let botaoPedraJS = document.getElementById("selectPedra");
    let botaoTesouraJS = document.getElementById("selectTesoura")
    let botaoPapelJS = document.getElementById("selectPapel");
    botaoPedraJS.style.backgroundColor="rgb(198, 185, 185)"
    botaoPapelJS.style.backgroundColor=""
    botaoTesouraJS.style.backgroundColor='';
    indice = 3;
}