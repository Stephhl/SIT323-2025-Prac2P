const express = require('express');
const app = express();
const port = 3000;

// Sends index.html file when user accesses page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Starts the server and listens on port 3000
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});