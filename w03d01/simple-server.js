const http = require('http');
const port = 17653;

const server = http.createServer((request, response) => {
  console.log('we received a request!!!');
  // console.log(request);

  const req = `${request.method} ${request.url}`; // GET /products
  // console.log(req);

  // conn.write('Move: up');

  if (req === 'GET /products') {
    response.write('you have made a GET request to the products page');
    response.end();
  } else if (req === 'GET /users') {
    response.write('you are viewing all the users');
    response.end();
  } else {
    response.write('hello there!');
    response.end();
  }

});

server.listen(port, () => {
  console.log(`the server is listening on port ${port}`);
});
