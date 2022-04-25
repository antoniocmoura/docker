const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')

const createConnection = () => {
    return mysql.createConnection(config)
}

const insertPeople = () => {
    const connection = createConnection()
    const sql = `INSERT INTO people(name) values('Antonio Carlos de Moura')`
    connection.query(sql)
    connection.end()
}

insertPeople()

app.get('/', (req, res) => {
    let html = '<h1>Full Cycle Rocks!</h1>'
    const connection = createConnection()
    const sql = 'SELECT name FROM people'
    connection.query(sql, function (err, result, fields) {
        try {
            if (err) throw err
            Object.keys(result).forEach(function (key) {
                html += '<li>' + result[key].name + '</li><br>'
            });
            res.send(html)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    })
    connection.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})