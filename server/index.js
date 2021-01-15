const express = require('express');
const app = express();
const port = process.env.port || 4000;
const apiRoutes = require('./routes/api-routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.get('/', (req,res) => {
    res.send("Hello World");
});

//use api routes
app.use('/api', apiRoutes);

//configure body parser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

//connect to mongoose
mongoose.connect(`mongodb://localhost/server`,
{useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
if (!db) {
    console.log("Not Connected");
} else {
    console.log("Succesfully Connected");
}

app.listen(port, () => console.log("Running on port " + port));