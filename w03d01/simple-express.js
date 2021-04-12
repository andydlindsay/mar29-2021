const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 24765;

// setup middleware
// app.use((req, res, next) => {
//   console.log(`incoming request: ${req.method} ${req.url}`);
//   next();
// });
const morganMiddleware = morgan('dev');
// console.log(morganMiddleware.toString());
app.use(morganMiddleware);
// app.use(morgan('dev'));

// GET /
app.get('/', (req, res) => {
  res.status(201);
  return res.send('you are on the home page!');

  // if (cond === x) {
  //   res.send();
  //   return;
  // }

  res.status(201).send('some information');
});

// GET /products
app.get('/products', (req, res) => {
  res.send('you have reached the products page');
});

// catchall route
app.get('*', (req, res) => {
  res.send('caught by the catchall route');
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
