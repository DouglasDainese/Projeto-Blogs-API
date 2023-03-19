const express = require('express');
const routers = require('./routers');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', routers.loginRoute);
app.use('/user', routers.userRoute);
app.use('/categories', routers.categoryRoute);
// ...

// É importante exportar a constante `app`,
// iniciando o projeto
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
