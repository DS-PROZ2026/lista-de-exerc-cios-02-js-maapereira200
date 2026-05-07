let pessoas = [];


for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome da pessoa " + (i+1) + ":");
    let idade = Number(prompt("Digite a idade de " + nome + ":"));
    
    let pessoa = {
        nome: nome,
        idade: idade
    };
    
    pessoas.push(pessoa);
}


let somaIdades = 0;
let maisVelho = pessoas[0];

for (let i = 0; i < pessoas.length; i++) {
    somaIdades = somaIdades + pessoas[i].idade;
    
    if (pessoas[i].idade > maisVelho.idade) {
        maisVelho = pessoas[i];
    }
}

let mediaIdade = somaIdades / 5;

console.log("=== RELATÓRIO DO GRUPO ===");
console.log("Média de idade: " + mediaIdade.toFixed(1) + " anos");
console.log("Pessoa mais velha: " + maisVelho.nome + " com " + maisVelho.idade + " anos");