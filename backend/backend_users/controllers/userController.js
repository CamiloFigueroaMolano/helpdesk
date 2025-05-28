const bcrypt = require('bcryptjs');
const User = require('../models/user');

// Registrar un nuevo usuario
exports.register = (req, res) => {
  const { U_name, U_email, U_password, U_phone, U_rol, U_estade, U_company, U_area } = req.body;

  if (!U_name || !U_email || !U_password) {
    return res.status(400).json({ message: 'Nombre, email y contraseña son obligatorios' });
  }

  // Verifica si el usuario ya existe
  User.findByEmail(U_email, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error en la base de datos' });
    if (results.length > 0) {
      return res.status(400).json({ message: 'El email ya está registrado' });
    }

    // Hashea la contraseña
    const hashedPassword = bcrypt.hashSync(U_password, 10);

    // Crear nuevo usuario
    User.create(
      {
        U_name,
        U_email,
        U_password: hashedPassword,
        U_phone,
        U_rol: U_rol || 5,
        U_estade: U_estade || 1,
        U_company: U_company || null,
        U_area
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
  const {
    U_name,
    U_email,
    U_phone,
    U_rol,
    U_estade,
    U_company,
    U_area,
    U_last_login
  } = req.body;

  User.update(
    id,
    {
      U_name,
      U_email,
      U_phone,
      U_rol,
      U_estade,
      U_company,
      U_area,
      U_last_login
    },
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Error al actualizar usuario' });
      res.json({ message: 'Usuario actualizado correctamente' });
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Correo y contraseña son obligatorios' });
  }

  User.findByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error en la base de datos' });
    if (results.length === 0) return res.status(401).json({ message: 'Correo no registrado' });

    const user = results[0];

    bcrypt.compare(password, user.U_password, (err, match) => {
      if (err) return res.status(500).json({ message: 'Error al verificar la contraseña' });
      if (!match) return res.status(401).json({ message: 'Contraseña incorrecta' });

      const fechaActual = new Date();
      User.updateLastLogin(user.U_id, fechaActual, (err) => {
        if (err) return res.status(500).json({ message: 'Error al actualizar último acceso' });

        res.json({
          message: 'Login exitoso',
          user: {
            id: user.U_id,
            name: user.U_name,
            email: user.U_email,
            role: user.U_rol,
            last_login: fechaActual
          }
        });
      });
    });
  });
};



// Eliminar usuario
exports.delete = (req, res) => {
  const { id } = req.params;
  User.delete(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error al eliminar usuario' });
    res.json({ message: 'Usuario eliminado correctamente' });
  });
};
