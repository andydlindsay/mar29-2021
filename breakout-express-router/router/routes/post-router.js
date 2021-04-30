const express = require('express');
const router = express.Router();

const funcThatReturnsRouter = (db) => {
  // GET /posts
  router.get('/', (req, res) => {
    db.query('SELECT * FROM posts;')
      .then((response) => {
        res.json(response.rows);
        // res.render('posts', {posts: response.rows});
      });
  });

  // GET /posts/:id
  router.get('/:id', (req, res) => {
    db.query('SELECT * FROM posts WHERE id = $1;', [req.params.id])
      .then((response) => {
        res.send(response.rows[0]);
      });
  });

  return router;
};

module.exports = funcThatReturnsRouter;
