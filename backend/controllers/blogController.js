const db = require('../config/db');

exports.getAllPosts = (req, res) => {
  db.query('SELECT * FROM posts ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ err });
    res.json(results);
  });
};

exports.getPostById = (req, res) => {
  db.query('SELECT * FROM posts WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ err });
    res.json(results[0]);
  });
};

exports.createPost = (req, res) => {
  const { title, content } = req.body;
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * @api {post} /posts Create a new blog post
 * @apiName CreatePost
 * @apiGroup Blog
 * @apiParam {String} title The title of the blog post.
 * @apiParam {String} content The body content of the blog post.
 * @apiParam {File} image The image associated with the blog post.
 * @apiSuccess {Object} res The newly created blog post, with an 'id' property.
 */
/*******  49cb5f14-c5b4-45e4-9f38-0384e37c3a04  *******/  const image = req.file ? `/uploads/${req.file.filename}` : null;
  db.query('INSERT INTO posts (title, content, image) VALUES (?, ?, ?)', [title, content, image], (err, result) => {
    if (err) return res.status(500).json({ err });
    res.json({ id: result.insertId });
  });
};

exports.updatePost = (req, res) => {
  const { title, content } = req.body;
  const id = req.params.id;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  const sql = image
    ? 'UPDATE posts SET title=?, content=?, image=? WHERE id=?'
    : 'UPDATE posts SET title=?, content=? WHERE id=?';
  const values = image ? [title, content, image, id] : [title, content, id];

  db.query(sql, values, (err) => {
    if (err) return res.status(500).json({ err });
    res.json({ message: 'Post updated' });
  });
};

exports.deletePost = (req, res) => {
  db.query('DELETE FROM posts WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ err });
    res.json({ message: 'Post deleted' });
  });
};
