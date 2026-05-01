const produtos = [

    {nome: "Teclado", preco: 10000 },
    {nome: "Mouse", preco: 555555 },
    {nome: "Memória RAM", preco: 10}


];

produtos.forEach(produto => console.log(`Produto: ${produto.nome}`))

//transformar => desconto
const comDesconto = produtos.map(produto => produto.preco * 0.9)
console.log(comDesconto)

//filtrar os mais baratos

const baratos = produtos.filter(produto => produto.preco < 400)
console.log(baratos)

//junta tudo -> acumula
const total = produtos.reduce((soma, produto) => soma + produto.preco, 0 ) 
console.log(total)