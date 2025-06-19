const db = require('../config/db');

const Blog = {
  getAll: (callback) => {
    db.query('SELECT * FROM posts', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM posts WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO posts SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE posts SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM posts WHERE id = ?', [id], callback);
  }
};

module.exports = Blog;
