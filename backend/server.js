const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blogRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/posts', blogRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
