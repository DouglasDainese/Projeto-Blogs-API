# API de Blogs

Este é um projeto de uma API de blogs, desenvolvido como parte do meu curso de Desenvolvimento Web que fiz na Trybe. A API permite a criação, leitura, atualização e exclusão de usuários, categorias e posts de blog. Ela é desenvolvida com Node.js, Express e Sequelize ORM para conexão com o banco de dados.

## Como utilizar

### Pré-requisitos

- Node.js 14 ou superior
- Docker e docker-compose (opcional)

### Instalação

1. Clone este repositório em sua máquina
2. Instale as dependências do projeto com o comando: `npm install`
3. Crie um arquivo `.env` com as variáveis de ambiente do projeto (veja o arquivo `.env.example` para mais informações)
4. Crie o banco de dados e execute as migrações com o comando: `npm run db:create && npm run db:migrate`
5. Inicie o servidor com o comando: `npm start`

### Rodando no Docker

1. Clone este repositório em sua máquina
2. Crie um arquivo `.env` com as variáveis de ambiente do projeto (veja o arquivo `.env.example` para mais informações)
3. Execute o comando: `docker-compose up`
4. O servidor estará disponível na porta especificada na variável `PORT` do arquivo `.env`

### Endpoints disponíveis

- `POST /login`: permite fazer login na API com e-mail e senha de um usuário cadastrado.
    - O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```
- `POST /users`: permite cadastrar um novo usuário na API.
    - O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    // a imagem não é obrigatória
  }
  ```
- `GET /users`: permite listar todos os usuários cadastrados na API.
- `GET /users/:id`: permite buscar um usuário específico pelo seu ID.
- `PUT /users/:id`: permite atualizar as informações de um usuário específico pelo seu ID.
- `DELETE /users/:id`: permite excluir um usuário específico pelo seu ID.
- `POST /categories`: permite cadastrar uma nova categoria na API.
- `GET /categories`: permite listar todas as categorias cadastradas na API.
- `GET /categories/:id`: permite buscar uma categoria específica pelo seu ID.
- `PUT /categories/:id`: permite atualizar as informações de uma categoria específica pelo seu ID.
- `DELETE /categories/:id`: permite excluir uma categoria específica pelo seu ID.
- `POST /posts`: permite cadastrar um novo post de blog na API.
- `GET /posts`: permite listar todos os posts de blog cadastrados na API.
- `GET /posts/:id`: permite buscar um post de blog específico pelo seu ID.
- `PUT /posts/:id`: permite atualizar as informações de um post de blog específico pelo seu ID.
- `DELETE /posts/:id`: permite excluir um post de blog específico pelo seu ID.

### Linter

O projeto utiliza o ESLint para padronização de código. Para executar o linter, utilize o comando `npm run lint`.

## Licença

Este projeto está licenciado sob a licença MIT. Para mais informações, consulte
