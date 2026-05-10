const somar = function(x, y){
return x+y;

}

console.log(somar(4, 9))

const subtrair = (a, b) => a-b;

console.log(subtrair(7, 9))


//basic function de hello world
const hello = ()=> "Hello World"
console.log(hello());


//function q faz cumprimento usando nome
const cump = nome=> `Olá ${nome}`;
console.log(cump("Gabriel"))


//function q faz a média de 3 números
const media = (a,b,c)=> (a+b+c)/3;
console.log(media(9,7,6))






//FUNÇÃO CALLBACK
console.log("Começo")


setTimeout(() => {console.log("O texto do MEIO")}, 2000)

console.log("Final")

