const consumo = [];

for (let i = 0; i < 6; i++) {
  let litros = Number(prompt(`Litros consumidos no dia ${i + 1}:`));
  consumo.push(litros);
}


let total = 0;
let maiorConsumo = consumo[0];
let diaPico = 1; // dia 1

for (let i = 0; i < consumo.length; i++) {
  total += consumo[i];
  
  if (consumo[i] > maiorConsumo) {
    maiorConsumo = consumo[i];
    diaPico = i + 1; // +1 pq array começa em 0
  }
}

let media = total / consumo.length;

// Relatório
console.log("--- RELATÓRIO ---");
console.log(`Consumo Total da Semana: ${total} L`);
console.log(`Média Diária: ${media.toFixed(2)} L`);
console.log(`Maior Pico: Dia ${diaPico} com ${maiorConsumo} L`);