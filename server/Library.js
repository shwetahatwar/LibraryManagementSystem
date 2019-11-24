const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();

router.get('/Library', (request, response) => {
    const connection = db.connect();
    const statement = `select bookname,price,category,Author,email,password from Library`;
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result));
    })
});

router.get('/Library/:id', (request, response) => {
    const id = request.params.id;
    const connection = db.connect();
    const statement = `select bookname,price,category,Author,email,password from Library where id = ${id}`;
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result[0]));
    })
});

router.post('/Library', (request, response) => {
    const {bookname,price,category,Author,email,password} = request.body;
    const connection = db.connect();
    const statement = `insert into Library
            (bookname,price,category,Author,email,password) values 
            ('${bookname}', '${price}', '${category}', '${Author}','${email}','${password}')`;
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result));
    })
});

router.put('/Library/:id', (request, response) => {
    const id = request.params.id;
    const {bookname,price,category,Author,email,password} = request.body;
    const connection = db.connect();
    const statement = `update Library
        set
        bookname = '${bookname}',
            price = '${price}',
            category = '${category}',
            Author = '${Author}',
            email = '${email}',
            password = '${password}'
           
        where id = ${id}`;
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result));
    })
});

router.delete('/Library/:id', (request, response) => {
    const id = request.params.id;
    const connection = db.connect();
    const statement = `delete from Library where id = ${id}`;
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result));
    })
});

module.exports = router;
