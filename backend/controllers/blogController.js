const Blog = require('../models/blogModel');

exports.getAllPosts = (req, res) => {
  Blog.getAll((err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.getPostById = (req, res) => {
  Blog.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result[0]);
  });
};

exports.createPost = (req, res) => {
  Blog.create(req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Post created', id: result.insertId });
  });
};

exports.updatePost = (req, res) => {
  Blog.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Post updated' });
  });
};

exports.deletePost = (req, res) => {
  Blog.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Post deleted' });
  });
};
