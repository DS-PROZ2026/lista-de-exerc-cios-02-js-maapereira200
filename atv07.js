let frota = [
    {
        modelo: "Volvo FH",
        quilometragem: 12000,
        revisao: 4
    },

    {
        modelo: "Scania R450",
        quilometragem: 8000,
        revisao: 8
    },

    {
        modelo: "Mercedes Actros",
        quilometragem: 15000,
        revisao: 7
    },

    {
        modelo: "DAF XF",
        quilometragem: 6000,
        revisao: 2
    }
];

let frotaManutencao = [];

for (let i = 0; i < frota.length; i++) {

    if (
        frota[i].quilometragem > 10000 ||
        frota[i].revisao > 6
    ) {

        frotaManutencao.push(frota[i]);

    }

}

console.log("Veículos que precisam de manutenção:");

for (let i = 0; i < frotaManutencao.length; i++) {

    console.log(frotaManutencao[i].modelo);

}

console.log("Quantidade total:", frotaManutencao.length);