
let mochila = [];

for (let i = 0; i < 6; i++) {
    let item = prompt("Você encontrou um item:");

    if (mochila.length < 4) {
        mochila.push(item);
    } else {
        let resposta = prompt("Mochila cheia! Deseja remover o primeiro item? (S/N)");

        if (resposta.toUpperCase() === "S") {
            mochila.shift() 
            mochila.push(item);
        } else {
            console.log("Item descartado:", item);
        }
    }
}

console.log("Itens finais na mochila:", mochila);