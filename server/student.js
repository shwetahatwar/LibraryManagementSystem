const express = require('express');
const db = require('./db');
const utils = require('./utils');
const router = express.Router();

router.post('/admin/signup', (request, response) => {
    const { name, lastName, email, password, phone } = request.body;

    const statement = `
        insert into admin 
            (name,  lastName, email, password, phone) 
            values 
            ('${name}', '${lastName}','${email}', '${password}', '${phone}');
    `;
    const connection = db.connect();
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result));
    });
});


router.post('/register/signup', (request, response) => {
    const { name, lastname, contactNo, emailid, password } = request.body;
    const connection = db.connect();
    const statement = `insert into register
            (name, lastname, contactNo, emailid, password) values 
            ('${name}', '${lastname}', '${contactNo}', '${emailid}','${password}');`;

    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result));

    })
});



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

// add student list by admin 
router.post('/add-studentByAdmin', (request, response) => {
    const { rollNo , studentName, mobileNo } = request.body;
    const connection = db.connect();
    const statement = `insert into addstudentbyadmin
            (rollNo, studentName, mobileNo) values 
            ('${rollNo}', '${studentName}', '${mobileNo}');`;

    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result));

    })
});

// student list displayed admin screen
router.get('/studentListByAdmin', (request, response) => {
    const connection = db.connect();
    const statement = `select rollNo, studentName, mobileNo from addstudentbyadmin`;
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result));
    })
});

//student signin

router.post('/studentsignin', (request, response) => {
    const { email, password } = request.body;
    console.log(request.body);
    const statement = `select * from register where emailid = '${email}' and password = '${password}'`;
    console.log('>>>>>>>>>>>>>>>>>>>>>>:: ',statement);
    const connection = db.connect();
    connection.query(statement, (error, result) => {
        connection.end();
        console.log('>>>>>>>>>>>>>>::',result);

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
