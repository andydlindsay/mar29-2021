require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

const db = require('./db/db');
const productRouter = require('./routes/product-router');
const postRouter = require('./routes/post-router');

// routes
app.use('/products', productRouter);
app.use('/posts', postRouter(db));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
