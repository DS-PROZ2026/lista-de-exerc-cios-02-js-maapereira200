let consumo = [];


for (let i = 0; i < 5; i++) {
    let kmPorLitro = Number(prompt("Informe o consumo do caminhão " + (i+1) + " em km/l:"));
    consumo.push(kmPorLitro);
}


let total = 0;
let melhor = consumo[0];
let pior = consumo[0];

for (let i = 0; i < consumo.length; i++) {
    total = total + consumo[i];
    
    if (consumo[i] > melhor) {
        melhor = consumo[i];
    }
    
    if (consumo[i] < pior) {
        pior = consumo[i];
    }
}

let mediaFrota = total / 5;

console.log("=== RELATÓRIO DA FROTA ===");
console.log("Média da Frota: " + mediaFrota.toFixed(2) + " km/l");
console.log("Melhor Consumo: " + melhor + " km/l");
console.log("Pior Consumo: " + pior + " km/l");