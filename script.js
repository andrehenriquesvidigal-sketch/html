const botao = document.querySelector("#botaoMostrar");
const textoApresentacao = document.querySelector("#textoApresentacao");
botao.addEventListener("click", () => {
    textoApresentacao.classList.toggle("escondido");
});
