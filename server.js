'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const router = require('./router');

const mongoose = require('mongoose');
const uri = "mongodb+srv://lechong:knf5469@clustertest.p8gblsi.mongodb.net/?retryWrites=true&w=majority"
const options = {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

mongoose.connect(uri,options)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Mongodb connected.'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8888;

app.use('/api', router);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to smart plant pot server home' });
    console.log("hello");
});

app.listen(port, () => {
    console.log('hello' + port)
}
);

