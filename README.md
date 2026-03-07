# PROJETO-IA-GERADORA-DE-COD

## 📌 Visão Geral
Este projeto implementa um sistema capaz de gerar código HTML e CSS automaticamente a partir de comandos escritos em linguagem natural, utilizando integração com Inteligência Artificial. A solução foi desenvolvida com HTML5, CSS3 e Node.js, conectada ao serviço Groq e hospedada na nuvem via Railway.

## 🚀 Principais Funcionalidades
- Interpretação de comandos textuais e conversão em código HTML e CSS válido.
- Integração com IA para geração de estilos dinâmicos e responsivos.
- Backend em Node.js com Express, garantindo segurança da chave API.
- Conexão com Groq API utilizando o modelo `llama-3.3-70b-versatile`.
- Servidor hospedado 24/7 no Railway, acessível sem necessidade de rodar localmente.

## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript
- Node.js + Express
- Groq API
- Railway (hospedagem do backend)

## 🔒 Segurança
A chave da API Groq **nunca fica exposta no frontend**. Ela é armazenada como variável de ambiente no Railway e utilizada exclusivamente pelo servidor backend.

## 📖 Instalação e Uso Local

Clone este repositório:
```bash
git clone https://github.com/rogerrrmoreira/PROJETO-IA-GERADORA-DE-COD.git
```

Instale as dependências:
```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto:
```
GROQ_API_KEY=sua_chave_aqui
```

Inicie o servidor:
```bash
node server.js
```

Abra o `index.html` no navegador.

## 🧩 Exemplo Prático

**Entrada (Comando em linguagem natural):**
```
Criar um botão azul com bordas arredondadas e efeito hover que muda para verde.
```

**Saída (Código gerado):**
```html
<style>
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
</style>
<button>Clique aqui</button>
```

## 🎯 Objetivo
Otimizar o fluxo de trabalho de desenvolvedores front-end, permitindo que estilos e estruturas sejam criados de forma rápida a partir de linguagem natural.

## 🏗️ Arquitetura do Sistema

```
Usuário (Frontend) → Servidor Node.js (Railway) → Groq API
                            ↑
                   Chave API segura aqui
```

**Frontend (HTML5 + CSS3 + JS):** Interface do usuário, envia comandos ao backend.

**Backend (Node.js + Express):** Recebe as requisições, chama a Groq API com segurança e retorna o código gerado.

**Groq API:** Processa o comando em linguagem natural e retorna o código HTML/CSS correspondente.

## 📌 Contribuições
Contribuições são encorajadas! Para colaborar, abra uma issue descrevendo melhorias ou envie um pull request com as alterações propostas.
