const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

const dbConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(dbConfig);

const NAMES = ['Carlos', 'Julia', 'Marcos', 'Fernanda', 'Thiago', 'Ana', 'Pedro', 'Mariana', 'Lucas', 'Bruna'];
const SURNAMES = ['Silva', 'Souza', 'Costa', 'Pereira', 'Gomes', 'Almeida', 'Lima', 'Melo', 'Ribeiro', 'Oliveira'];

function initializeDatabase() {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS people (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
    `;
    connection.query(createTableQuery, handleQueryError('Erro ao criar tabela'));
}

function handleQueryError(message) {
    return function(err) {
        if (err) {
            console.error(message, err);
            throw err;  // Exceções são lançadas de forma clara, caso haja erro
        }
    };
}

function generateRandomName() {
    const firstName = getRandomElement(NAMES);
    const lastName = getRandomElement(SURNAMES);
    return `${firstName} ${lastName}`;
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function insertRandomPeople(count, callback) {
    const people = Array.from({ length: count }, () => [generateRandomName()]);
    const insertQuery = 'INSERT INTO people (name) VALUES ?';
    connection.query(insertQuery, [people], handleQueryError(`Erro ao inserir ${count} registros`));
    callback();
}

function fetchPeople(callback) {
    const selectQuery = 'SELECT * FROM people';
    connection.query(selectQuery, (err, results) => {
        if (err) {
            console.error('Erro ao buscar registros:', err);
            return;
        }
        callback(results);
    });
}

function renderPeoplePage(results) {
    const header = '<div style="display: flex; flex-direction: column;"><h1>Full Cycle Rocks!</h1>';
    const peopleList = results.map(person => `<span>${person.name}</span>`).join('');
    return `${header}${peopleList}</div>`;
}

app.get('/', (req, res) => {
    insertRandomPeople(10, () => {
        fetchPeople(results => {
            const html = renderPeoplePage(results);
            res.send(html);
        });
    });
});

app.listen(PORT, () => {
    initializeDatabase();
    console.log(`Servidor rodando na porta: ${PORT}`);
});
