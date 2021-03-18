const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: 'root',
    password: '',
    port: 3306,
    database: 'user_test',
    multipleStatements: true
})

app.post('/api/register', (req, res) => {
    if (req.body.userName === '' || req.body.password === '') {
        res.send("確填入完整資訊")
        return
    }
    else {
        db.query("INSERT INTO users set userName=?,userPassword=?", [req.body.userName, req.body.password], (err, row) => {
            res.send("註冊成功");
        })
    }

})
app.post('/api/login', (req, res) => {
    if (req.body.userName === '' || req.body.password === '') {
        res.send("確填入完整資訊")
        return
    }
    else {
        db.query("select * from users where userName=? and userPassword=?", [req.body.userName, req.body.password], (err, row) => {
            if (row.length !== 0) {
                res.send(`歡迎${req.body.userName}登入`)
            } else {
                res.send("請確認帳號密碼")
            }

        })
    }

})






app.listen(3001, () => {
    console.log('running on port 3001');
})