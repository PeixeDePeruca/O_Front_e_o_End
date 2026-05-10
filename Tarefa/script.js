// ATV 1: Lista inicial
let nomes = ["Alice", "Letícia", "Roberval", "mano J.C"];
const ul = document.getElementById("listaNomes");

function renderizarLista(arrayDeNomes) {
  ul.innerHTML = ""; //limpa a lista antes de renderizar
  
  arrayDeNomes.forEach(nome => {


    const li = document.createElement("li");
    li.textContent = nome;
    ul.appendChild(li);


  });
  
  contarNomesLongos();
}

//manipulação de posições
function addFinal() {
  const input = document.getElementById("inputNome");
  if (input.value) {
    nomes.push(input.value);
    input.value = "";
    renderizarLista(nomes);
  }
}

function addInicio() {
  const input = document.getElementById("inputNome");
  if (input.value) {
    nomes.unshift(input.value);
    input.value = "";
    renderizarLista(nomes);
  }
}

function removeUltimo() {
  nomes.pop();
  renderizarLista(nomes);
}

function removePrimeiro() {
  nomes.shift();
  renderizarLista(nomes);
}



//função com forEach e contagem
//função q conta quantos nomes têm mais de 5 letras E reescrever a atividade anterior usando forEach - e o de mostrar todos os nomes em MAIÚSCULO
function contarNomesLongos() {
  let contador = 0;
  
  nomes.forEach(nome => {
    if (nome.length > 5) {
      contador++;
    }
  });

  document.getElementById("contador").textContent = `Nomes com mais de 5 letras: ${contador}`;
}


//filter e Map
function filtrarNomes() {
  //filtra o array original mas n o altera permanentemente para a exibição
  const nomesFiltrados = nomes.filter(nome => nome.length > 5);
  renderizarLista(nomesFiltrados);
}


function transformarMaiusculo() {
  //o map cria um novo array transformado, a lista td fica em maiusculo
  const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
  renderizarLista(nomesMaiusculos);
}

function transformarMinusculo() {
  //o map cria um novo array transformado, a lista td fica em minusculo(utíl para deixar o texto "normal" novamente)
  const nomesMinusculos = nomes.map(nome => nome.toLowerCase());
  renderizarLista(nomesMinusculos);
}



//"Printar" a lista
renderizarLista(nomes);


