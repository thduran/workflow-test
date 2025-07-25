const http = require('http');

const server = http.createServer((req, res) => {
  res.end('App funcionando!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

