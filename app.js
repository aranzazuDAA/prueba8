const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/index.html');
})

app.get('/segunda', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/segunda.html');
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})
