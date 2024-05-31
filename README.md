<h1 id="Api-Game-Store">Api Game Store</h1>
<p>A API Game Store é uma aplicação que gerencia informações sobre jogos, videogames e usuários. Esta API permite realizar operações CRUD (Create, Read, Update, Delete) em entidades como jogos, videogames e usuários, além de fornecer autenticação para os usuários.</p>
<div>
  <img alt="Static Badge" src="https://img.shields.io/badge/status-complete-green">
  <img alt="Static Badge" src="https://img.shields.io/badge/npm-v14.0.0-blue">
</div>

<h2>Indice</h2>
<ul>
  <li><a href="#Api-Game-Store">Descrição</a></li>
  <li><a href="#Instalação">Instalação</a></li>
  <li><a href="#Endpoints">Endpoints</a></li>
  <ul>
    <li><a href="#Usuarios">Usuários</a></li>
    <li><a href="#Jogos">Jogos</a></li>
    <li><a href="#Video-Games">Video Games</a></li>
  </ul>
  <li><a href="#Autenticacao">Autenticação</a></li>
  <li><a href="#Exemplo_Requicicao">Exemplos de Requicição</a></li>
</ul>

<h2>Instalação</h2>
<p>Para executar esta API localmente, siga as etapas abaixo:</p>
<ol>
  <li>Certifique-se de ter o Docker instalado em sua máquina.</li>
  <li>Clone este repositório em sua máquina local.</li>
  <li>Navegue até o diretório do projeto.</li>
  <li>Execute o comando `docker-compose up -d` para iniciar o contêiner do MongoDB.</li>
  <li>Após o MongoDB estar em execução, instale as dependências do projeto usando o comando `npm --save install`</li>
  <li>Inicie o servidor da API com o camando `npm start`.</li>
  <li>A API estará acessível em http://localhost:3000.</li>
</ol>

  
<h2> Endpoints</h2>
<h3>Usuários</h3>
<ul>
  <li>POST /api/v1/user: Cria um novo usuário.</li>
  <li>GET /api/v1/user: Retorna todos os usuários.</li>
  <li>GET /api/v1/user/:id: Retorna um usuário específico pelo ID.</li>
  <li>PUT /api/v1/user/:id: Atualiza as informações de um usuário existente.</li>
  <li>DELETE /api/v1/user/:id: Remove um usuário pelo ID.</li>
  <li>POST /api/v1/user/authenticate: Autentica um usuário e retorna um token JWT.</li>
</ul>
<h3>Jogos</h3>
<ul>
  <li>POST /api/v1/game: Cria um novo jogo.</li>
  <li>GET /api/v1/game: Retorna todos os jogos.</li>
  <li>GET /api/v1/game/:id: Retorna um jogo específico pelo ID.</li>
  <li>PUT /api/v1/game/:id: Atualiza as informações de um jogo existente.</li>
  <li>DELETE /api/v1/game/:id: Remove um jogo pelo ID.</li>
</ul>
<h3>Video Games</h3>
<ul>
  <li>POST /api/v1/videoGame: Cria um novo videogame.</li>
  <li>GET /api/v1/videoGame: Retorna todos os videogames.</li>
  <li>GET /api/v1/videoGame/:id: Retorna um videogame específico pelo ID.</li>
  <li>PUT /api/v1/videoGame/:id: Atualiza as informações de um videogame existente..</li>
  <li>DELETE /api/v1/videoGame/:id: Remove um videogame pelo ID.</li>
</ul>

<h2>Autenticação</h2>
<p>A API utiliza autenticação baseada em JWT (JSON Web Token). Para acessar endpoints protegidos, é necessário incluir um token JWT válido no cabeçalho de autorização (Bearer token).</p>

<h2>Exemplos de Requisições</h2>  
<p>Para criar um novo usuário:</p>

```
const axios = require('axios');

axios.post('http://localhost:3000/api/v1/user', {
  name: 'Usuário Exemplo',
  username: 'usuario',
  password: 'senha',
  profiles: ['admin']
})
.then(response => {
  console.log('Novo usuário criado:', response.data);
})
.catch(error => {
  console.error('Erro ao criar usuário:', error);
});
```
<p>Para autenticar um usuário e obter um token JWT:</p>

```
axios.post('http://localhost:3000/api/v1/user/authenticate', {
  username: 'usuario',
  password: 'senha'
})
.then(response => {
  console.log('Token JWT:', response.data);
})
.catch(error => {
  console.error('Erro ao autenticar usuário:', error);
});

```

## Technologies:
<div>
<img src="https://imgs.search.brave.com/RLOWZeRmu-GP2IG2XWubhGPkdOB0Guwfk6lmlAv-h7w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRlL0RvY2tlcl8o/Y29udGFpbmVyX2Vu/Z2luZSlfbG9nby5z/dmc.svg" width='150px'>
&nbsp;&nbsp;&nbsp;&nbsp;
<img src='https://imgs.search.brave.com/iniAB_iAeBVvwIDtH5jp4q7MbwJECplsIdK7IzGRF4A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZnIvNC80NS9N/b25nb0RCLUxvZ28u/c3Zn.svg' width='150px'>
&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://imgs.search.brave.com/F0HSeCZv_BzgKM-cvsYroCCYpp1LEkFULWKTDXPVqLU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9ub2RlanMtbG9n/by5wbmc" width='150px'>
</div>


## Dependencies:
### bcrypt
### body-parser
### express
### jsonwebtoken
### mongoose
### nodemon
