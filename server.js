const express = require('express');

//const { connectDB } = require('./utils/database');

const PORT = process.env.PORT || 5000;

const app = express();

//connectDB();

app.use(express.json());

app.use('/api/hobbies',require('./routes/hobbies'));
app.use('/api',require('./routes/users'));

app.listen(PORT,() => {
    console.log('server running');
});