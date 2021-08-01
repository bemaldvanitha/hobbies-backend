const express = require('express');

const connectDB = require('./utils/database');

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());

app.listen(PORT,() => {
    console.log('server running');
});