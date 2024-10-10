const express = require('express')
var mysql = require('mysql2/promise');
const { faker } = require('@faker-js/faker');

const app = express()

app.get('/', async (req, res) => {
  const connection = await mysql.createConnection({
    host: 'db',
    database: 'fc2-db',
    user: 'fc2-user',
    password: 'password'
  });

  connection.connect();
  const insert = 'INSERT INTO `people` (name) VALUES (?)';
  const values = [faker.person.fullName()];
  await connection.execute(insert, values);
  const select = 'SELECT id, name FROM `people`';
  const [rows, fields] = await connection.query(select);
  const peopleList = rows.reduce((acc, person) => acc + `<li>${person.id} - ${person.name}</li>`, '');
  res.send(`<h1>Full Cycle Rocks!!!</h1><div><h4></h4><ul>${peopleList}</ul></div>`);
  connection.end();
});

app.listen(3000)