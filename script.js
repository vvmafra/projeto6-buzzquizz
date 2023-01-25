console.log("oi");

function esconder() {
    const tela1 = document.querySelector(".tela-1");
    tela1.classList.add("escondido");

    const tela3 = document.querySelector(".tela-3");
    tela3.classList.remove("escondido");
}