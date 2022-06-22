const express = require('express');
const app = express();
const path = require('path');

//line

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
  });

app.listen(3000, () => {
    console.log("Server listening on port:3000");
});