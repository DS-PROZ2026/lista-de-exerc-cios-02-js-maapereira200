let destinos = [];


for (let i = 0; i < 10; i++) {
    let destino = prompt("Nome do destino " + (i+1) + ":");
    let passagem = Number(prompt("Preço da passagem para " + destino + ":"));
    let hotel = Number(prompt("Valor total gasto com hotel em " + destino + ":"));
    
    let viagem = {
        destino: destino,
        passagem: passagem,
        hotel: hotel
    };
    
    destinos.push(viagem);
}

 
let somaPassagens = 0;
let maisCaro = destinos[0];
let temBarato = false;

for (let i = 0; i < destinos.length; i++) {
    somaPassagens = somaPassagens + destinos[i].passagem;
    
    // Verifica destino mais caro pelo preço da passagem
    if (destinos[i].passagem > maisCaro.passagem) {
        maisCaro = destinos[i];
    }
    
    if (destinos[i].passagem < 1000) {
        temBarato = true;
    }
}

let mediaPassagens = somaPassagens / 10;

console.log("=== COMPARADOR DE VIAGEM ===");
console.log("Média de preço das passagens: R$ " + mediaPassagens.toFixed(2));
console.log("Destino mais caro: " + maisCaro.destino + " - R$ " + maisCaro.passagem.toFixed(2));

if (temBarato) {
    console.log("Sim, existe destino com passagem abaixo de R$ 1000,00");
} else {
    console.log("Não existe destino com passagem abaixo de R$ 1000,00");
}