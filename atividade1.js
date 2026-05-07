
const listaproibida = ["João Silva", "Maria Souza", "Carlos Alberto"];

const visitantesAutorizados = [];

for (let i = 0; i < 3; i++) {
  
  let nomeVisitante = prompt(`Digite o nome do visitante ${i + 1}:`);

  
  if (listaProibida.includes(nomeVisitante)) {
    console.log(`ALERTA: Segurança acionada para o visitante ${nomeVisitante}!`);
  } else {
    
    visitantesAutorizados.push(nomeVisitante);
    console.log(`${nomeVisitante} cadastrado com sucesso.`);
  }
}

console.log("Visitantes autorizados:", visitantesAutorizados);