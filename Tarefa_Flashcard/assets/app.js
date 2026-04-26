function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <div class="cartao__conteudo__pergunta">
                <h3>${categoria}</h3>
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    cartao.addEventListener('click', () => {
        cartao.classList.toggle('active');
    });

    container.appendChild(cartao);
}


//lógica do Botão
const btn = document.getElementById('btn-adicionar');
btn.addEventListener('click', () => {
    const inputCategoria = document.getElementById('categoria');
    const inputPergunta = document.getElementById('pergunta');
    const inputResposta = document.getElementById('resposta');

    if (inputPergunta.value === '' || inputResposta.value === '') {
        alert("Preencha os campos!! 😨");
        return;
    }

    criaCartao(inputCategoria.value || 'Geral', inputPergunta.value, inputResposta.value);
    
    inputCategoria.value = '';
    inputPergunta.value = '';
    inputResposta.value = '';
});