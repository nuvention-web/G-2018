const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(express.static('client'));
app.use(bodyParser.json());



app.listen(3000, () => console.log('Express server is up on port 3000'));

module.exports.app = app;
