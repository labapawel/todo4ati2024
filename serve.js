const express = require("express");
const mysql = require("mysql");
const path = require('path')

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

