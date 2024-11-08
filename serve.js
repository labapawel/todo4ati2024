const express = require("express");
const mysql = require("mysql2/promise");
const path = require('path');
require('dotenv').config();


let app = express();
app.listen(5500, () => {
    console.log("serwer start")
})

let appPath = path.join(__dirname, "dist/todo/browser/")
app.use(express.static(appPath));


async function sqlcon(){
    let con = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    })
    return con;
}

async function getTasks() {
    let con = await sqlcon()
    try {


        const [rows] = await con.execute("SELECT * FROM `todo`");
        return rows;

    } catch (error) {
        console.error('Wystąpił błąd', error);
        throw error;
    } finally {
        await con.end()
    }
    return null;
}


app.get('/api/data', async (req, res) => {
    const resp = await getTasks();
    res.json(resp)
    //res.send(JSON.stringify(JSON.stringify(resp)));
})


app.post("/api/update", async (req, res)=>{
        const {id, name, prority, status, description, startDate,
               endDate, active} = req.body;
        const con = await sqlcon();
        if(!id || id < 0){
           await con.execute("insert into todo (name,prority,status, description, startDate,endDate,active) values (?,?,?,?,?,?,?)"
                [name,prority,status, description, startDate,endDate,active]
            )
        } else
        {
            await con.execute("update todo set name=?,prority=?,status=?, description=?, startDate=?,endDate=?,active=? where id=?",
                [name,prority,status, description, startDate,endDate,active, id]
            )
        }

});

app.get('*', (req, res) => {
    res.sendFile(path.join(appPath, "index.html"))
})

