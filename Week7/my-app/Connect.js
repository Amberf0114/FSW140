const express = require("express");
const mysql = require("mysql");
const cors = require('cors')

const db = mysql.createConnection({
    host:   'localhost',
    user:   'root',
    password:   '',
    database: 'avengers'

})

db.connect((err) => {
    if (err){
        throw err
    }
    console.log("Connection to MySQL Database Server Established Successfully")
});

//Set up basic Express Server
const app = express();

app.use(cors())

// //SELECT execution
 app.get('/displayRows', (req,res)=>{
     let myQuery = "SELECT * FROM avengers";
     db.query(myQuery, (err, result) => {
         if (err){
             throw err
         }
         //console.log(result)
         //res.send('SELECT Query executed Successfully')
         return res.status(200).send(result)
     })
 })

// //Create an empty database
// app.get('/createDB', (req,res) => {
//     let myQuery = 'CREATE DATABASE 16Sept2021'
//     db.query(myQuery, (err, result) => {
//         if (err){
//             throw err
//         }
//         console.log(result)
//         res.send('16Sept2021 Database Created Successfully')
//     })
// })

// //Create a New Table
// app.get('/createTable', (req,res)=>{
//     let myQuery = "CREATE TABLE postings (id INT auto_increment, title VARCHAR(100), message VARCHAR(250), PRIMARY KEY (id))";
//     db.query(myQuery, (err, result) => {
//         if (err){
//             throw err
//         }
//         console.log(result)
//         res.send('postings Table Created Successfully')
//     })
// })

// //Create a Second Table
// app.get('/createTable2', (req,res)=>{
//     let myQuery = "CREATE TABLE postings2 (id INT auto_increment, title VARCHAR(100), message VARCHAR(250), PRIMARY KEY (id))";
//     db.query(myQuery, (err, result) => {
//         if (err){
//             throw err
//         }
//         console.log(result)
//         res.send('postings2 Table Created Successfully')
//     })
// })

// // //Insert Row-1
// app.get('/insertRow1', (req,res) => {
//     let post = {title: 'first post', message: 'This is my first message via a route'};
//     let myQuery = 'INSERT INTO postings SET ?' // to bind variable
//     //Run the SL Command
//     db.query(myQuery, post, (err, result) => {
//         if (err){
//             throw err
//         }
//         console.log(result)
//         res.send('First row inserted Successfully')        
//     })
// })

// app.get('/insertRow2', (req,res) => {
//     let post = {title: 'second post', message: 'This is my second message via a route'};
//     let myQuery = 'INSERT INTO postings SET ?' // to bind variable
//     //Run the SL Command
//     db.query(myQuery, post, (err, result) => {
//         if (err){
//             throw err
//         }
//         console.log(result)
//         res.send('Second row inserted Successfully')        
//     })
// })

// //SELECT execution
// app.get('/displayRows', (req,res)=>{
//     let myQuery = "SELECT * FROM postings";
//     db.query(myQuery, (err, result) => {
//         if (err){
//             throw err
//         }
//         console.log(result)
//         res.send('SELECT Query executed Successfully')
//     })
// })

// // Execute an UPDATE query
// app.get('/updateRow/:id', (req,res) => {
//     //let newTitle = "This is an update to the Title column"
//     //let myQuery = `UPDATE postings SET title = ${newTitle} WHERE id = ${req.params.id}`;

//     db.query(myQuery, (err, result) => {
//         if (err){
//             throw err
//         }
//         console.log(result)
//         res.send('UPDATE Query executed Successfully')
// })})

// //DELETE query

// app.get('/deleteRow/:id', (req,res) => {
//     let myQuery = `DELETE FROM postings WHERE id = ${req.params.id}`;

//     db.query(myQuery, (err, result) => {
//         if (err){
//             throw err
//         }
//         console.log(result)
//         res.send('DELETE Query executed Successfully')
// })})

///Open Up the Port and Listen for a connection request
app.listen('9000', () => {
    console.log('local Web Server is up and Running!')
})