const input = document.getElementById("input")
const add_final = document.querySelector("#button")
let lista_tela = document.querySelector("#lista_tela")


let lista_nome = ["Aléquis", "João Micelo", "Kevi", "ULton"];

function renderizar(){



    for(let nome of lista_nome){
        let item = document.createElement('li')
        item.innerText = nome
        lista_tela.appendChild(item)
    }
    

}

document.addEventListener("DOMContentLoaded", () =>{
    renderizar()
})

add_final.addEventListener("click", () => {
    let valor_input = input.value

    lista_tela.innerHTML = ""

    lista_nome.push(valor_input)
    console.log(lista_nome)
    renderizar()
})