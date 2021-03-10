const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { dbName: 'pwr-up', useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

const usersRouter = require('./routes/user.router');
const routinesRouter = require('./routes/routine.router');
const setsRouter = require('./routes/set.router');

app.use('/api/users', usersRouter);
app.use('/api/routines', routinesRouter);
app.use('/api/sets', setsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});