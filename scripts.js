let botao = document.querySelector(".botao-gerar");

async function gerarCodigo() {
    let texto = document.querySelector(".textarea").value;
    let blocoCodigo = document.querySelector(".bloco-codigo");
    let resultadoCodigo = document.querySelector(".resultado-codigo");  

    let resposta = await fetch("http://localhost:3000/gerar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ texto })
    });

    let dados = await resposta.json();

    if (dados.erro) {
        alert("Erro: " + dados.erro);
        return;
    }

    let resultado = dados.resultado;
    blocoCodigo.textContent = resultado;
    resultadoCodigo.srcdoc = resultado;
}

botao.addEventListener("click", gerarCodigo);
