const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send(`Node and Express server running on port ${PORT}`);
});

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);