const express = require('express');
const db = require('./db');
const utils = require('./utils');
const router = express.Router();

router.post('/signin', (request, response) => {
    const { email, password } = request.body;
    console.log(request.body);
    const statement = `select * from admin where email = '${email}' and password = '${password}'`;
    const connection = db.connect();
    connection.query(statement, (error, result) => {
        connection.end();

        let status = '';
        let data = null;
        if (error == null) {
            // query got executed successfully
            if (result.length == 0) {
                // error
                status = 'error';
                data = 'Invalid user email or password';
            } else {
                // success
                status = 'success';
                data = result[0]; // send the user details
            }
        } else {
            // error in the statement
            status = 'error';
            data = error;
        }
        response.send({
            status: status,
            data: data
        });
    });
});


module.exports = router;
