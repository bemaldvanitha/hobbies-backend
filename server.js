const express = require('express');
const cors = require('cors');

//const { connectDB } = require('./utils/database');

const PORT = process.env.PORT || 5000;

const app = express();

//connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/hobbies',require('./routes/hobbies'));
app.use('/api',require('./routes/users'));

app.listen(PORT,() => {
    console.log('server running');
});