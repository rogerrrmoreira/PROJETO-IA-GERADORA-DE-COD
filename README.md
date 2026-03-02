# PROJETO-IA-GERADORA-DE-COD 
📌 Visão Geral
Este projeto implementa um sistema capaz de gerar código CSS automaticamente a partir de comandos escritos em linguagem natural, utilizando integração com Inteligência Artificial. A solução foi desenvolvida com HTML5, CSS e Java, e conectada ao serviço Groq, garantindo alta performance e escalabilidade no processamento das requisições.

🚀 Principais Funcionalidades
Interpretação de comandos textuais e conversão em código CSS válido.

Integração com IA para geração de estilos dinâmicos e responsivos.

Estrutura modular baseada em HTML5 e CSS3, seguindo boas práticas de desenvolvimento.

Backend implementado em Java, assegurando robustez e confiabilidade.

Conexão com Groq API, otimizando o desempenho e reduzindo a latência.

🛠️ Tecnologias Utilizadas
HTML5

CSS3

Java

Groq API

📖 Instalação e Uso
Clone este repositório:

bash
git clone https://github.com/seuusuario/PROJETO-IA-GERADORA-DE-COD.git
Configure o ambiente Java e instale as dependências necessárias.

Execute o projeto e insira comandos em linguagem natural para gerar automaticamente o código CSS correspondente.

🧩 Exemplo Prático
Entrada (Comando em linguagem natural):
Código
Criar um botão azul com bordas arredondadas e efeito hover que muda para verde.
Saída (Código CSS gerado):
css
button {
  background-color: blue;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: green;
}
Este exemplo demonstra como o sistema interpreta instruções simples e as converte em código CSS funcional e pronto para uso.

🎯 Objetivo
O projeto busca otimizar o fluxo de trabalho de desenvolvedores front-end, permitindo que estilos sejam criados de forma rápida e precisa, sem necessidade de escrever manualmente cada regra CSS.

📌 Contribuições
Contribuições são encorajadas. Para colaborar:

Abra uma issue descrevendo melhorias ou correções.

Envie um pull request com alterações propostas.

🏗️ Arquitetura do Sistema
A solução foi projetada de forma modular, garantindo escalabilidade, desempenho e clareza estrutural. A arquitetura pode ser descrita da seguinte forma:

Frontend (HTML5 + CSS3)

Responsável pela interface do usuário.

Permite a entrada de comandos em linguagem natural.

Exibe o código CSS gerado de forma organizada e pronta para uso.

Backend (Java)

Processa as requisições recebidas do frontend.

Gerencia a comunicação com a Groq API.

Implementa lógica de negócio para validação e formatação do código CSS.

Integração com Groq

Serviço de IA utilizado para interpretar comandos textuais.

Converte instruções em linguagem natural em regras CSS válidas.

Garante alta performance e baixa latência no processamento.

Fluxo de Dados

O usuário insere um comando no frontend.

O backend em Java envia a requisição para a Groq API.

A IA processa o comando e retorna o código CSS correspondente.

O backend valida e entrega o resultado ao frontend.

O código CSS é exibido ao usuário para utilização imediata.
