import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.sqlite', 
    (error) => {
        if (error) {
            console.error('Erro ao conectar ao banco de dados:', error.message);
        } else {
            console.log('Conectado ao banco de dados com sucesso!');
        }
    }
);

export default db; 