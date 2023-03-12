function abrirCaixa(){
    let input = document.createElement("input");
    input.type("text");
    input.placeholder = "escolha a bebida"

    document.body.appendChild(input)



}

function fecharCaixa(){
    document.body.removeChild(document.body.lastChild);
    
}



