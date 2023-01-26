console.log("oi");

function esconder() {
    const tela1 = document.querySelector(".tela-1");
    tela1.classList.add("escondido");

    const tela3 = document.querySelector(".tela-3");
    tela3.classList.remove("escondido");
}

function checkInputs() {
    let validation = 0;

    const titulo = document.querySelector(".titulo")
    if (titulo.value.length < 20 || titulo.value.length > 65) {
        alert("O número de caracteres digitados deve ser entre 20 e 65")
    } else {
        validation++
    }
    //  const url = document.querySelector(".url").value {
    //  if(!(url.protocol === "http: " || url.protocol === "https: "))
    // alert("O formato da URL é inválido")
    //  } else {
    //     validation++     
    //  }

    const perguntas = document.querySelector(".perguntas")
    if (perguntas.value < 3){
        alert("A quantidade mínima de perguntas deve ser maior ou igual a 3!");
    }
    else {
        validation++;
    }

    const niveis = document.querySelector(".niveis")
    if(niveis.value < 2){
        alert("A quantidade mínima de níveis deve ser maior ou igual a 2!")
    } else {
        validation++
    }

    if (validation === 4) {
        const esconder = document.querySelector(".tela-3")
        esconder.classList.add(".escondido")
    }

}