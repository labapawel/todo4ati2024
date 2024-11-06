const express = require("express");
const mysql = require("mysql2");
const path = require('path');
require('dotenv').config();

let con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

con.connect( (err)=>{
    if(err){
        console.error("Błąd połączenia z bazą danych", err.message);
    } else
            console.log("Połączono z bazą danych");
})


let app = express();
app.listen(5500, ()=>{
    console.log("serwer start")
})

let appPath = path.join(__dirname, "dist/todo/browser/")
app.use(express.static(appPath));

app.get('/api/data', (req, res)=>{
    res.send(JSON.stringify({dane:true}));
})

app.get('*', (req, res)=>{
    res.sendFile(path.join(appPath, "index.html"))
})

