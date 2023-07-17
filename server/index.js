// server/index.js
const express = require('express');
const convertController = require('./controllers/convertController');

const app = express();
const port = process.env.PORT || 3000;

app.get('/convert', convertController);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
