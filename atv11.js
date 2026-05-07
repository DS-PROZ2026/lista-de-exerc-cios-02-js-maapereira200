
const nomes = [];
let quantidade = Number(prompt("Quantos nomes quer cadastrar?"));

for (let i = 0; i < quantidade; i++) {
  let nome = prompt(`Digite o ${i + 1}º nome:`);
  nomes.push(nome);
}

let i = 0;
let encontrado = false;

while (i < nomes.length) {
  if (nomes[i] === "Ricardo") {
    console.log("Usuário encontrado");
    encontrado = true;
    break; // interrompe o laço
  }
  i++;
}

if (!encontrado) {
  console.log("Não cadastrado");
}