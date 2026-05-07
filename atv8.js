let nomesVendedores = ["Ana", "Carlos", "Julia", "Pedro", "Marcos"];
let totalVendas = [2000, 3500, 1800, 5000, 1500];

let soma = 0;

for (let i = 0; i < totalVendas.length; i++) {
    soma += totalVendas[i];
}

let media = soma / totalVendas.length;

console.log("Média de vendas do grupo: " + media);


let maiorVenda = totalVendas[0];
let vendedorDestaque = nomesVendedores[0];

for (let i = 1; i < totalVendas.length; i++) {

    if (totalVendas[i] > maiorVenda) {
        maiorVenda = totalVendas[i];
        vendedorDestaque = nomesVendedores[i];
    }

}

console.log("Vendedor destaque: " + vendedorDestaque);

let meta = media * 0.7;

console.log("Abaixo da meta:");

for (let i = 0; i < totalVendas.length; i++) {

    if (totalVendas[i] < meta) {
        console.log(nomesVendedores[i]);
    }

}