const express = require('express');
const app = express();

const cors = require('cors');
const router = require('./routes/postRoutes');
const connectDb = require('./db');
require('dotenv').config();

const port = process.env.PORT;

connectDb(); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/api/tasks', router);

app.listen(port, () => console.log(`Server running on port ${port}`));