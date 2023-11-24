// Importar el pool desde db.js
const { pool } = require('../../db/db');

// Nueva función para registrar usuario
function registrarUsuario() {
    // Obtener valores del formulario
    const userName = document.getElementById('userName').value;
    const lastName = document.getElementById('lastName').value;
    const middleName = document.getElementById('middleName').value;
    const cell = document.getElementById('cell').value;
    const pass = document.getElementById('pass').value;
    const userRole = document.getElementById('userRole').value;

    // Llamar a la función para insertar en la base de datos
    insertUser(userName, lastName, middleName, cell, pass, userRole);
}

async function insertUser(userName, lastName, middleName, cell, pass, userRole) {
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query(
            'INSERT INTO client (userName, lastName, middleName, cell, pass, userRole) VALUES (?, ?, ?, ?, ?, ?)',
            [userName, lastName, middleName, cell, pass, userRole]
        );
        console.log('Usuario registrado con éxito:', result);
    } catch (err) {
        console.error('Error al registrar usuario:', err);
    } finally {
        if (conn) conn.release(); // Release the connection back to the pool.
    }
}
