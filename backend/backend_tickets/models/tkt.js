const connection = require('../config/db');

const Ticket = {
  // Crear un nuevo ticket
  create: (ticket, callback) => {
    const sql = `
      INSERT INTO tkts (
        tkt_Name, tkt_Number, tkt_Description, tkt_UserId_Sol, tkt_UserId_Assg, 
        tkt_Company_Id, tkt_Stade_Id, tkt_Rol_Id, tkt_Lvl_Id, tkt_type_Id, 
        tkt_EstimadeTime, tkt_start, tkt_Crit_Id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    connection.query(sql, [
      ticket.tkt_Name,
      ticket.tkt_Number,
      ticket.tkt_Description,
      ticket.tkt_UserId_Sol,
      ticket.tkt_UserId_Assg || null,
      ticket.tkt_Company_Id || null,
      ticket.tkt_Stade_Id || 8,
      ticket.tkt_Rol_Id || 1,
      ticket.tkt_Lvl_Id || 1,
      ticket.tkt_type_Id || null,
      ticket.tkt_EstimadeTime || null,
      ticket.tkt_start || null,
      ticket.tkt_Crit_Id || 3
    ], callback);
  },

  // Obtener todos los tickets
  findAll: (callback) => {
    const sql = 'SELECT * FROM tkts';
    connection.query(sql, callback);
  },

  // Obtener un ticket por ID
  findById: (id, callback) => {
    const sql = 'SELECT * FROM tkts WHERE tkt_Id = ?';
    connection.query(sql, [id], callback);
  },

  // Actualizar ticket
  update: (id, ticket, callback) => {
    const sql = `
      UPDATE tkts SET 
        tkt_Name = ?, tkt_Description = ?, tkt_UserId_Sol = ?, tkt_UserId_Assg = ?, 
        tkt_Company_Id = ?, tkt_Stade_Id = ?, tkt_Rol_Id = ?, tkt_Lvl_Id = ?, tkt_Crit_Id = ?, 
        tkt_type_Id = ?, tkt_EstimadeTime = ?, tkt_start = ?, tkt_Update = NOW()
      WHERE tkt_Id = ?
    `;
    connection.query(sql, [
      ticket.tkt_Name,
      ticket.tkt_Description,
      ticket.tkt_UserId_Sol,
      ticket.tkt_UserId_Assg || null,
      ticket.tkt_Company_Id || null,
      ticket.tkt_Stade_Id || 9,
      ticket.tkt_Rol_Id || 1,
      ticket.tkt_Lvl_Id || 1,
      ticket.tkt_Crit_Id || 3,
      ticket.tkt_type_Id || null,
      ticket.tkt_EstimadeTime || null,
      ticket.tkt_start || null,
      id
    ], callback);
  },

  // Cambiar estado a "cerrado"
  close: (id, callback) => {
    const sql = `
      UPDATE tkts SET tkt_Stade_Id = 10, tkt_Close = NOW(), tkt_Update = NOW() 
      WHERE tkt_Id = ?
    `;
    connection.query(sql, [id], callback);
  },

  // Eliminar ticket
  delete: (id, callback) => {
    const sql = 'DELETE FROM tkts WHERE tkt_Id = ?';
    connection.query(sql, [id], callback);
  }
};

module.exports = Ticket;
