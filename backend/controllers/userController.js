const bcrypt = require('bcryptjs');
const User = require('../models/user');

// Registrar un nuevo usuario
exports.register = (req, res) => {
  const { nombre, email, password, telefono, rol, estado, departamento } = req.body;
  if (!nombre || !email || !password) {
    return res.status(400).json({ message: 'Nombre, email y password son obligatorios' });
  }
  // Verifica si el usuario ya existe
  User.findByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error en la base de datos' });
    if (results.length > 0) {
      return res.status(400).json({ message: 'El email ya está registrado' });
    }
    // Hashea la contraseña
    const hashedPassword = bcrypt.hashSync(password, 10);
    User.create(
      {
        nombre,
        email,
        password: hashedPassword,
        telefono,
        rol: rol || 'usuario',
        estado: estado || 'activo',
        departamento
      },
      (err, result) => {
        if (err) return res.status(500).json({ message: 'Error al crear usuario' });
        res.status(201).json({ message: 'Usuario registrado correctamente' });
      }
    );
  });
};

// Listar todos los usuarios
exports.getAll = (req, res) => {
  User.findAll((err, results) => {
    if (err) return res.status(500).json({ message: 'Error al obtener usuarios' });
    res.json(results);
  });
};

// Obtener usuario por ID
exports.getById = (req, res) => {
  const { id } = req.params;
  User.findById(id, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al buscar usuario' });
    if (results.length === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(results[0]);
  });
};

// Actualizar usuario
exports.update = (req, res) => {
  const { id } = req.params;
  const { nombre, email, telefono, rol, estado, departamento, ultimo_login } = req.body;
  User.update(
    id,
    { nombre, email, telefono, rol, estado, departamento, ultimo_login },
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Error al actualizar usuario' });
      res.json({ message: 'Usuario actualizado correctamente' });
    }
  );
};

// Eliminar usuario
exports.delete = (req, res) => {
  const { id } = req.params;
  User.delete(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error al eliminar usuario' });
    res.json({ message: 'Usuario eliminado correctamente' });
  });
};
