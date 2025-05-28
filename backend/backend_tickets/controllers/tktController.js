const Ticket  = require('../models/tkt');


// Crear un nuevo ticket
exports.create = (req, res) => {
  const {
    tkt_Name, tkt_Number, tkt_Description, tkt_UserId_Sol, tkt_UserId_Assg,
    tkt_Company_Id, tkt_Stade_Id, tkt_Rol_Id, tkt_Lvl_Id, tkt_type_Id,
    tkt_EstimadeTime, tkt_start,tkt_Crit_Id 
  } = req.body;

  if (!tkt_Name || !tkt_Number || !tkt_Description || !tkt_UserId_Sol) {
    return res.status(400).json({ message: 'Campos obligatorios faltantes' });
  }

  Ticket.create({
    tkt_Name,
    tkt_Number,
    tkt_Description,
    tkt_UserId_Sol,
    tkt_UserId_Assg,
    tkt_Company_Id,
    tkt_Stade_Id,
    tkt_Rol_Id,
    tkt_Lvl_Id,
    tkt_type_Id,
    tkt_EstimadeTime,
    tkt_start,
    tkt_Crit_Id
  }, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error al crear el ticket', error: err.sqlMessage });
    res.status(201).json({ message: 'Ticket creado correctamente' });
  });
};

// Listar todos los tickets
exports.getAll = (req, res) => {
  Ticket.findAll((err, results) => {
    if (err) return res.status(500).json({ message: 'Error al obtener tickets' });
    res.json(results);
  });
};

// Obtener ticket por ID
exports.getById = (req, res) => {
  const { id } = req.params;
  Ticket.findById(id, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al buscar ticket' });
    if (results.length === 0) return res.status(404).json({ message: 'Ticket no encontrado' });
    res.json(results[0]);
  });
};

// Actualizar ticket
exports.update = (req, res) => {
  const { id } = req.params;
  const {
    tkt_Name, tkt_Description, tkt_UserId_Sol, tkt_UserId_Assg,
    tkt_Company_Id, tkt_Stade_Id, tkt_Rol_Id, tkt_Lvl_Id,
    tkt_type_Id, tkt_EstimadeTime, tkt_start, tkt_Crit_Id 
  } = req.body;

  Ticket.update(id, {
    tkt_Name,
    tkt_Description,
    tkt_UserId_Sol,
    tkt_UserId_Assg,
    tkt_Company_Id,
    tkt_Stade_Id,
    tkt_Rol_Id,
    tkt_Lvl_Id,
    tkt_Crit_Id,
    tkt_type_Id,
    tkt_EstimadeTime,
    tkt_start
  }, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error al actualizar el ticket' });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Ticket no encontrado' });
    res.json({ message: 'Ticket actualizado correctamente' });
  });
};

// Cerrar ticket (cambia el estado a 10)
exports.close = (req, res) => {
  const { id } = req.params;
  Ticket.close(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error al cerrar el ticket' });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Ticket no encontrado' });
    res.json({ message: 'Ticket cerrado correctamente' });
  });
};

// Eliminar ticket
exports.delete = (req, res) => {
  const { id } = req.params;
  Ticket.delete(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error al eliminar el ticket' });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Ticket no encontrado' });
    res.json({ message: 'Ticket eliminado correctamente' });
  });
};
