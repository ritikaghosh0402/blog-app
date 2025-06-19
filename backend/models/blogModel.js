const db = require('../config/db');

const Blog = {
  getAll: (cb) => {
    db.query('SELECT * FROM posts ORDER BY created_at DESC', cb);
  },
  getById: (id, cb) => {
    db.query('SELECT * FROM posts WHERE id = ?', [id], cb);
  },
  delete: (id, cb) => {
    db.query('DELETE FROM posts WHERE id = ?', [id], cb);
  },
};

module.exports = Blog;
