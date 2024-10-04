import express from 'express';
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};
import { createConnection } from 'mysql';

app.get('/', (_, res) => {
  insertPeople('Espirito Santo, Vitoria');

  const con = createConnection(config);
  con.query(`SELECT * FROM people;`, (err, result) => {
    if (err) throw err;
    let content = '';
    result.forEach(row => {
      content += `<li>${row.name}</li>`;
    });
    res.send(`<h1>Full Cycle Rocks!</h1><ul>${content}</ul>`);
  });
  con.end();
});

app.listen(port, () => {
  console.log('Executado na porta ' + port);
});

function insertPeople(name) {
  const con = createConnection(config);
  con.query(
    `INSERT INTO people (id, name) values (6, '${name}') ON DUPLICATE KEY UPDATE name = '${name}';`,
    err => {
      if (err) throw err;
      return name;
    }
  );
  con.end();
}
