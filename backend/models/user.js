    const connection = require('../config/db');

    const User = {
    // Crear un nuevo usuario
    create: (user, callback) => {
        const sql = `
            INSERT INTO users 
                (nombre, email, password, telefono, rol, estado, departamento) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
            `;
            connection.query(
            sql,
            [
                user.nombre,
                user.email,
                user.password,
                user.telefono || null,
                user.rol || 'usuario',
                user.estado || 'activo',
                user.departamento || null
            ],
            callback
            );

    },

    // Buscar usuario por email
    findByEmail: (email, callback) => {
        const sql = 'SELECT * FROM users WHERE email = ?';
        connection.query(sql, [email], callback);
    },

    // Buscar usuario por id
    findById: (id, callback) => {
        const sql = 'SELECT * FROM users WHERE id = ?';
        connection.query(sql, [id], callback);
    },

    // Listar todos los usuarios
    findAll: (callback) => {
        const sql = 'SELECT * FROM users';
        connection.query(sql, callback);
    },

    // Actualizar usuario
    update: (id, user, callback) => {
        const sql = `
        UPDATE users SET 
            nombre = ?, 
            email = ?, 
            telefono = ?, 
            rol = ?, 
            estado = ?, 
            departamento = ?, 
            ultimo_login = ?
        WHERE id = ?
        `;
        connection.query(
        sql,
        [
            user.nombre,
            user.email,
            user.telefono || null,
            user.rol || 'usuario',
            user.estado || 'activo',
            user.departamento || null,
            user.ultimo_login || null,
            id
        ],
        callback
        );
    },

    // Actualizar solo el campo ultimo_login
    updateLastLogin: (id, fecha, callback) => {
        const sql = 'UPDATE users SET ultimo_login = ? WHERE id = ?';
        connection.query(sql, [fecha, id], callback);
    },

    // Eliminar usuario
    delete: (id, callback) => {
        const sql = 'DELETE FROM users WHERE id = ?';
        connection.query(sql, [id], callback);
    }
    };

    module.exports = User;
