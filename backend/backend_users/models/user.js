const connection = require('../config/db');

const User = {
  // Crear un nuevo usuario
  create: (user, callback) => {
    const sql = `
      INSERT INTO users 
        (U_name, U_email, U_password, U_phone, U_rol, U_estade, U_company, U_area) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    connection.query(
      sql,
      [
        user.U_name,
        user.U_email,
        user.U_password,
        user.U_phone    || null,
        user.U_rol      || 5, // en el momento de produccion se requiere validar el id de usuario
        user.U_estade   || 1, // en el momento produccion se reuqiere validar el id de activo
        user.U_company  || null, 
        user.U_area     || null
      ],
      callback
    );
  },

  // Buscar usuario por email
  findByEmail: (email, callback) => {
    const sql = 'SELECT * FROM users WHERE U_email = ?';
    connection.query(sql, [email], callback);
  },



  // Buscar usuario por id
  findById: (id, callback) => {
    const sql = 'SELECT * FROM users WHERE U_id = ?';
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
        U_name      = ?, 
        U_email     = ?, 
        U_phone     = ?, 
        U_rol       = ?, 
        U_estade    = ?, 
        U_company   = ?, 
        U_area      = ?, 
        U_last_login = ?
      WHERE U_id    = ?
    `;
    connection.query(
      sql,
      [
        user.U_name,
        user.U_email,
        user.U_phone    || null,
        user.U_rol      || 5, // en el momento de produccion se requiere validar el id de usuario        
        user.U_estade   || 1, // en el momento produccion se reuqiere validar el id de activo
        user.U_company  || null, 
        user.U_area     || null,
        user.U_last_login || null,
        id
      ],
      callback
    );
  },

  // Actualizar solo el campo U_last_login
  updateLastLogin: (id, fecha, callback) => {
    const sql = 'UPDATE users SET U_last_login = ? WHERE U_id = ?';
    connection.query(sql, [fecha, id], callback);
  },


  // Eliminar usuario
  delete: (id, callback) => {
    const sql = 'DELETE FROM users WHERE U_id = ?';
    connection.query(sql, [id], callback);
  }
};

module.exports = User;
