const express = require("express");
const app = express();
const config = require("./config/development");
const bodyParser = require('body-parser');
const usersRoute = require("./routes/users");

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use((req, res, next) => {
    console.log(`${req.url} --> ${req.method} --> ${Date.now()}`);
    next();
})

app.use("/users/", usersRoute);

app.use((req, res, next) => {
    const error = new Error("Not Found!");
    next(error);
})

app.use((err, req, res, next) => {
    res.status(500);
    res.json({
        error: err.message,
        stack: err.stack
    })
})

app.listen(config.port);