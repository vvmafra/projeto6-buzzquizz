let perguntas;
let verificarCor;
let imagem;
function esconder() {
  const tela1 = document.querySelector(".tela-1");
  tela1.classList.add("escondido");

  const tela3 = document.querySelector(".tela-3");
  tela3.classList.remove("escondido");

  segundaTela();
}

function segundaTela() {
  const terceiraTela = document.querySelector(".tela-3");

  terceiraTela.innerHTML = `
  <h1 class="titulo-tela3">Crie suas perguntas</h1>
    <div class="caixa-fake-1 escondido">
      <h1>Pergunta 1</h1>
      <img src="./imagens/Vector.jpg" />
    </div>
    <div class="caixa-tela-3 ">
      <div class="pergunta1">
        <br />
        <h1>Pergunta 1</h1>
        <input class="input-pergunta" type="text" value="" placeholder="texto da pergunta" />
        <input class="input-cor" type="text" value="" placeholder="Cor de fundo da pergunta" />
      </div>
      <div class="resposta-pergunta1">
        <h1>Resposta Correta</h1>
        <input type="text" value="" placeholder="Resposta correta" />
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
          class="input1"
          type="text"
          value=""
          placeholder="URL da imagem 1"
        />
        <input
          class="input2"
          type="text"
          value=""
          placeholder="Resposta incorreta 2"
        />
        <input
          class="input3"
          type="text"
          value=""
          placeholder="URL da imagem 2"
        />
        <input
          class="input4"
          type="text"
          value=""
          placeholder="Resposta incorreta 3"
        />
        <input
          class="input5"
          type="text"
          value=""
          placeholder="URL da imagem 3"
        />
      </div>
    </div>
    <div class="caixa-fake-2">
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
        <input type="text" value="" placeholder="Resposta correta" />
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
          class="input1"
          type="text"
          value=""
          placeholder="URL da imagem 1"
        />
        <input
          class="input2"
          type="text"
          value=""
          placeholder="Resposta incorreta 2"
        />
        <input
          class="input3"
          type="text"
          value=""
          placeholder="URL da imagem 2"
        />
        <input
          class="input4"
          type="text"
          value=""
          placeholder="Resposta incorreta 3"
        />
        <input
          class="input5"
          type="text"
          value=""
          placeholder="URL da imagem 3"
        />
      </div>
    </div>
    <div class="caixa-fake-3">
      <h1>Pergunta 3</h1>
      <img src="./imagens/Vector.jpg" />
    </div>
    <div class="caixa-de-perguntas-3 caixa-tela-3 escondido">
      <div class="pergunta1">
        <br />
        <h1>Pergunta 3</h1>
        <input class="input-pergunta" type="text" value="" placeholder="texto da pergunta" />
        <input class="input-cor" type="text" value="" placeholder="Cor de fundo da pergunta" />
      </div>
      <div class="resposta-pergunta1">
        <h1>Resposta Correta</h1>
        <input type="text" value="" placeholder="Resposta correta" />
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
          class="input1"
          type="text"
          value=""
          placeholder="URL da imagem 1"
        />
        <input
          class="input2"
          type="text"
          value=""
          placeholder="Resposta incorreta 2"
        />
        <input
          class="input3"
          type="text"
          value=""
          placeholder="URL da imagem 2"
        />
        <input
          class="input4"
          type="text"
          value=""
          placeholder="Resposta incorreta 3"
        />
        <input
          class="input5"
          type="text"
          value=""
          placeholder="URL da imagem 3"
        />
      </div>
    </div>
    <div onclick="verificarPergunta()" class="botao-quizz">Prosseguir pra criar níveis</div>
    `;

  perguntas = document.querySelector(".input-pergunta");

  cor = document.querySelector(".input-cor");

  verificarCor = cor.value;

  verificarImagem = document.querySelector(".imagem");

  imagem = verificarImagem.value;
}
function verificarPergunta() {
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
/*Até aqui é o do WIlliam*/
function checkInputs() {
  let validation = 0;

  const titulo = document.querySelector(".titulo");
  if (titulo.value.length < 20 || titulo.value.length > 65) {
    alert("O número de caracteres digitados deve ser entre 20 e 65");
  } else {
    validation++;
  }
  /*Aqui estava a parte de verificar URL*/
  const perguntas = document.querySelector(".perguntas");
  if (perguntas.value < 3) {
    alert("A quantidade mínima de perguntas deve ser maior ou igual a 3!");
  } else {
    validation++;
  }

  const niveis = document.querySelector(".niveis");
  if (niveis.value < 2) {
    alert("A quantidade mínima de níveis deve ser maior ou igual a 2!");
  } else {
    validation++;
  }

  if (validation === 4) {
    const esconder = document.querySelector(".tela-3");
    esconder.classList.add(".escondido");
  }
}
