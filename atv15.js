let custos = [];


for (let i = 0; i < 4; i++) {
    let valor = Number(prompt("Digite o custo da manutenção " + (i+1) + ":"));
    custos.push(valor);
}

let total = 0;
let maisCara = custos[0];

for (let i = 0; i < custos.length; i++) {
    total = total + custos[i];
    
    if (custos[i] > maisCara) {
        maisCara = custos[i];
    }
}

let media = total / 4;

console.log("=== RELATÓRIO DE MANUTENÇÃO ===");
console.log("Custo Total: R$ " + total.toFixed(2));
console.log("Custo Médio: R$ " + media.toFixed(2));
console.log("Valor da Manutenção Mais Cara: R$ " + maisCara.toFixed(2));