const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const blogController = require('../controllers/blogController');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

router.get('/', blogController.getAllPosts);
router.get('/:id', blogController.getPostById);
router.post('/', upload.single('image'), blogController.createPost);
router.put('/:id', upload.single('image'), blogController.updatePost);
router.delete('/:id', blogController.deletePost);

module.exports = router;
