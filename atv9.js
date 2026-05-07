const funcionarios = [
    { nome: "Ana", salario: 2500 },
    { nome: "Pedro", salario: 4200 },
    { nome: "Marcos", salario: 1800 },
    { nome: "Julia", salario: 3500 }
];

let i = 0;

console.log("Funcionários que ganham mais de 3000:");

while (i < funcionarios.length) {

    if (funcionarios[i].salario > 3000) {
        console.log(funcionarios[i].nome);
    }

    i++;
}