let temperaturas = [];
for (let i = 0; i < 6; i++) {
    let temp = Number(prompt("Digite a temperatura do sensor " + (i+1) + ":"));
    temperaturas.push(temp);
}

let soma = 0;
let maiorTemp = temperaturas[0];
let alerta = 0;

for (let i = 0; i < temperaturas.length; i++) {
    soma = soma + temperaturas[i];
    
    if (temperaturas[i] > maiorTemp) {
        maiorTemp = temperaturas[i];
    }
    
    if (temperaturas[i] > 35) {
        alerta = alerta + 1;
    }
}

let media = soma / 6;

console.log("=== RELATÓRIO DA ESTUFA ===");
console.log("Temperatura Média: " + media.toFixed(1) + "°C");
console.log("Máxima Registrada: " + maiorTemp + "°C");
console.log("Quantidade de Sensores em Alerta: " + alerta);