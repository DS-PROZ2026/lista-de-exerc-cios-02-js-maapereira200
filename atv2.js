
const atletas = [];

for (let i = 0; i < 5; i++) {
  let nome = prompt(`Digite o nome do ${i + 1}º atleta a chegar:`);
  atletas.push(nome);
}


for (let i = 0; i < atletas.length; i++) {
  if (i === 0) {
    console.log(`Ouro: ${atletas[i]}`);
  } else if (i === 1) {
    console.log(`Prata: ${atletas[i]}`);
  } else if (i === 2) {
    console.log(`Bronze: ${atletas[i]}`);
  } else {
    console.log(`Participante ${atletas[i]} recebeu medalha de honra.`);
  }
}