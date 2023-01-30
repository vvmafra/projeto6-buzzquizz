let perguntas;
let verificarCor;
let imagem;
function esconder() {
  const tela1 = document.querySelector(".tela-1");
  tela1.classList.add("escondido");

  const tela31 = document.querySelector(".tela-31");
  tela31.classList.remove("escondido");
}
// /*Até aqui Victor*/

function checkInputs() {
  let validation = 0;
  const verificarImagem = document.querySelector(".imagem");
  imagem = verificarImagem.value;

  const titulo = document.querySelector(".titulo input");
  if (titulo.value.length < 20 || titulo.value.length > 65) {
    alert("O número de caracteres digitados deve ser entre 20 e 65");
  } else {
    validation++;
  }

  if (checkurl(imagem) === false) {
    alert("Insira um endereco valido.");
  } else {
    validation++;
  }
  const perguntas = document.querySelector(".perguntas input");
  if (perguntas.value < 3) {
    alert("A quantidade mínima de perguntas deve ser maior ou igual a 3!");
  } else {
    validation++;
  }

  const niveis = document.querySelector(".niveis input");
  if (niveis.value < 2) {
    alert("A quantidade mínima de níveis deve ser maior ou igual a 2!");
  } else {
    validation++;
  }

    if (validation === 4) {
        console.log("oi");
        aplicarTela3A();
        const tela32 = document.querySelector(".tela-32");
        tela32.classList.remove("escondido");
        tela3A();
    }
    else {
        alert("Deu erro, faça novamente");
    }
}
function aplicarTela3A() {
  const esconder = document.querySelector(".tela-31");
  esconder.classList.add("escondido");
}
// /*Até aqui Vitória*/
function tela3A() {
  const tela3A = document.querySelector(".tela-32");
  tela3A.innerHTML = `
  <h1 class="titulo-tela3">Crie suas perguntas</h1>
    <div onclick="abrirPergunta1()" class="caixa-fake-1 escondido">
      <h1>Pergunta 1</h1>
      <img src="./imagens/Vector.jpg" />
    </div>
    <div class="caixa-tela-3">
      <div class="pergunta1">
        <br />
        <h1>Pergunta 1</h1>
        <input class="input-pergunta" type="text" value="" placeholder="texto da pergunta" />
        <input class="input-cor" type="text" value="" placeholder="Cor de fundo da pergunta" />
      </div>
      <div class="resposta-pergunta1">
        <h1>Resposta Correta</h1>
        <input type="text" value="" class="reposta-correta" placeholder="Resposta correta" />
        <input class="imagem" type="text" value="" placeholder="URL da imagem" />
      </div>
      <div class="resposta-incorreta">
        <h1>Respostas incorretas</h1>
        <input
          type="text"
          value=""
          class="input1"
          placeholder="Resposta incorreta 1"
        />
        <input
          type="text"
          value=""
          class="input3"
          placeholder="URL da imagem 1"
        />
        <input
          type="text"
          value="" 
          class="input2"
          placeholder="Resposta incorreta 2"
        />
        <input
          type="text"
          value=""
          class="input3"
          placeholder="URL da imagem 2"
        />
        <input
          type="text"
          value=""
          class="input4"
          placeholder="Resposta incorreta 3"
        />
        <input
          type="text"
          value=""
          class="input3"
          placeholder="URL da imagem 3"
        />
      </div>
    </div>
    <div onclick= "abrirPergunta2(this)" class="caixa-fake-2">
      <h1>Pergunta 2</h1>
      <img src="./imagens/Vector.jpg" />
    </div>
    <div class="caixa-de-perguntas-2 caixa-tela-3 escondido">
      <div class="pergunta1">
        <br />
        <h1>Pergunta 2</h1>
        <input class="input-pergunta" type="text" value="" placeholder="texto da pergunta" />
        <input class="input-cor" type="text" value="" placeholder="Cor de fundo da pergunta" />
      </div>
      <div class="resposta-pergunta1">
        <h1>Resposta Correta</h1>
        <input  type="text" value="" class="reposta-correta" placeholder="Resposta correta" />
        <input class="imagem" type="text" value="" placeholder="URL da imagem" />
      </div>
      <div class="resposta-incorreta">
        <h1>Respostas incorretas</h1>
        <input
          class=" input1"
          type="text"
          value=""
          placeholder="Resposta incorreta 1"
        />
        <input
          class="input3 imagem"
          type="text"
          value=""
          placeholder="URL da imagem 1"
        />
        <input
          class=" input1"
          type="text"
          value=""
          placeholder="Resposta incorreta 2"
        />
        <input
          class="input3 imagem"
          type="text"
          value=""
          placeholder="URL da imagem 2"
        />
        <input
          class="input1 imagem"
          type="text"
          value=""
          placeholder="Resposta incorreta 3"
        />
        <input
          class="input3 imagem"
          type="text"
          value=""
          placeholder="URL da imagem 3"
        />
      </div>
    </div>
    <div onclick= "abrirPergunta3(this)" class="caixa-fake-3">
      <h1>Pergunta 3</h1>
      <img src="./imagens/Vector.jpg" />
    </div>
    <div  class="caixa-de-perguntas-3 caixa-tela-3 escondido">
      <div class="pergunta1">
        <br />
        <h1>Pergunta 3</h1>
        <input class="input-pergunta" type="text" value="" placeholder="texto da pergunta" />
        <input class="input-cor" type="text" value="" placeholder="Cor de fundo da pergunta" />
      </div>
      <div class="resposta-pergunta1">
        <h1>Resposta Correta</h1>
        <input type="text" value="" class="reposta-correta" placeholder="Resposta correta" />
        <input class="imagem" type="text" value="" placeholder="URL da imagem" />
      </div>
      <div class="resposta-incorreta">
        <h1>Respostas incorretas</h1>
        <input
          class="input1"
          type="text"
          value=""
          placeholder="Resposta incorreta 1"
        />
        <input
          class="input3 imagem"
          type="text"
          value=""
          placeholder="URL da imagem 1"
        />
        <input
          class=" input1"
          type="text"
          value=""
          placeholder="Resposta incorreta 2"
        />
        <input
          class="input3 imagem"
          type="text"
          value=""
          placeholder="URL da imagem 2"
        />
        <input
          class=" input1"
          type="text"
          value=""
          placeholder="Resposta incorreta 3"
        />
        <input
          class="input3 imagem"
          type="text"
          value=""
          placeholder="URL da imagem 3"
        />
      </div>
    </div>
    <div onclick="verificarPergunta(), escondeTela32()" class="botao-quizz">Prosseguir pra criar níveis</div>
    `;
}
function verificarPergunta() {
  perguntas = document.querySelector(".input-pergunta");
  const cor = document.querySelector(".input-cor");
  verificarCor = cor.value;
  verificarImagem = document.querySelector(".imagem");
  verificarImagemInput = document.querySelector(".input3");

  imagem = verificarImagem.value;
  imagemInput = verificarImagemInput.value;
  const verificarPergunta = perguntas.value;
  if (verificarPergunta.length <= "19") {
    alert("Insira no mínimo 20 caracteres em uma pergunta.");
  }
  if (imagemInput === "") {
    alert("Insira a URL de uma Imagem!");
  }
  is_hexadecimal(cor.value);
  checkurl(verificarImagem.value);
  checkurl(verificarImagemInput.value);
  verificarResposta();
  respostaCorretaIncorreta();
  // <== aqui tem que tirar o comentário quando arrumar o código da vic
}
function escondeTela32() {
  const tela32 = document.querySelector(".tela-32");
  tela32.classList.add("escondido");

  tela3C();
}

//Aqui tem que mudar o querySelector pro nome da div da Vic

function is_hexadecimal(verificarCor) {
  let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

  if (regex.test(verificarCor)) {
    return true;
  } else {
    alert("Insira uma cor hexadecimal!");
  }
}
function verificarPergunta() {
  perguntas = document.querySelector(".input-pergunta");
  const cor = document.querySelector(".input-cor");
  verificarCor = cor.value;
  verificarImagem = document.querySelector(".imagem");

  imagem = verificarImagem.value;
  const verificarPergunta = perguntas.value;
  console.log(verificarPergunta);
  if (verificarPergunta.length <= "19") {
    alert("Insira no mínimo 20 caracteres em uma pergunta.");
  }
  is_hexadecimal(cor.value);
  checkurl(verificarImagem.value);
}
function is_hexadecimal(verificarCor) {
  let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

  if (regex.test(verificarCor)) {
    return true;
  } else {
    alert("Insira uma cor hexadecimal!");
  }
}
function checkurl(imagem) {
  regexp =
    /^(?:(?:https?):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(imagem)) {
    return true;
  } else {
    alert("Insira um endereco valido.");
    return false;
  }
}
function checkurl(imagemInput) {
  regexp =
    /^(?:(?:https?):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(imagemInput)) {
    return true;
  } else {
    alert("Insira um endereço válido.");
    return false;
  }
}
function verificarResposta() {
  const pergunta = document.querySelector(".reposta-correta");
  const input1 = document.querySelector(".resposta-incorreta .input1");

  const input2 = document.querySelector(".resposta-incorreta .input2");
  const input4 = document.querySelector(".resposta-incorreta .input4");

  resposta = pergunta.value;
  incorreta1 = input1.value;
  incorreta2 = input2.value;
  incorreta4 = input4.value;
}
function respostaCorretaIncorreta() {
  if (resposta === "") {
    alert("Insira uma resposta correta!");
  } else if (incorreta1 === "" && incorreta2 === "" && incorreta4 === "") {
    alert("Insira no mínimo 1 resposta incorreta");
  }
}
function abrirPergunta1() {
  const esconderFake1 = document.querySelector(".caixa-fake-1");

  esconderFake1.classList.add("escondido");

  const mostrarPergunta1 = document.querySelector(".caixa-tela-3");

  mostrarPergunta1.classList.remove("escondido");

  const esconderPergunta2 = document.querySelector(".caixa-de-perguntas-2");

  esconderPergunta2.classList.add("escondido");

  const mostrarPergunta3 = document.querySelector(".caixa-de-perguntas-3");

  mostrarPergunta3.classList.add("escondido");

  const mostrarFake3 = document.querySelector(".caixa-fake-3");

  mostrarFake3.classList.remove("escondido");

  const mostrarFake2 = document.querySelector(".caixa-fake-2");

  mostrarFake2.classList.remove("escondido");
}
function abrirPergunta2() {
  const esconderPergunta1 = document.querySelector(".caixa-tela-3");

  esconderPergunta1.classList.add("escondido");

  const perguntaFake1 = document.querySelector(".caixa-fake-1");

  perguntaFake1.classList.remove("escondido");

  const mostrarPergunta2 = document.querySelector(".caixa-de-perguntas-2");

  mostrarPergunta2.classList.remove("escondido");

  const perguntaFake2 = document.querySelector(".caixa-fake-2");

  perguntaFake2.classList.add("escondido");

  const esconderFake3 = document.querySelector(".caixa-fake-3");

  esconderFake3.classList.remove("escondido");

  const mostrarPergunta3 = document.querySelector(".caixa-de-perguntas-3");

  mostrarPergunta3.classList.add("escondido");
}
function abrirPergunta3() {
  const esconderPergunta2 = document.querySelector(".caixa-de-perguntas-2");

  esconderPergunta2.classList.add("escondido");

  const mostrarFake2 = document.querySelector(".caixa-fake-2");

  mostrarFake2.classList.remove("escondido");

  const mostrarPergunta3 = document.querySelector(".caixa-de-perguntas-3");

  mostrarPergunta3.classList.remove("escondido");

  const esconderFake3 = document.querySelector(".caixa-fake-3");

  esconderFake3.classList.add("escondido");
}
/*Até aqui é o do WIlliam*/