const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./student');
const LibraryRouter = require('./Library');
const adminRouter = require('./admin')
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// routers
app.use(LibraryRouter);
app.use(userRouter);
app.use(adminRouter);



app.listen(3000, '0.0.0.0', () => {
    console.log(`Server started on 3000`);
});
