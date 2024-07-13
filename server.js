const express = require('express');
const app = express();

// routes
app.get('/', (req, res) => {
    res.send('Hello word');
});gi

app.listen(3000, () => {
    console.log(`Node is running on PORT 3000`);
});