const express = require('express');
const app = express();
const port = process.env.port || 8080;
const apiRoutes = require('./api-routes');


app.get('/', (req,res) => {
    res.send("Hello World");
});

app.use('/api', apiRoutes);

app.listen(port, () => console.log("Running on port " + port));