const express = require('express')
const mysql = require('mysql')

// create connection 
const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: ''
});
db.connect(err => {
    if(err){
        throw err;
    }
    console.log('mysql connected')
});

const app = express()

//create database
app.get('/createdb', (req, res) =>{
    let sql = 'CREATE DATABASE mysqldata'
    db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('Database created')
    });
});