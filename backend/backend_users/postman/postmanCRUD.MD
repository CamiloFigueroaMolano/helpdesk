# 📘 Documentación de API - Gestión de Usuarios

## puerto sugerido
```
configuracion de base solo se cambia el puerto sugerido:
PORT:3000
```

## 🧑‍💻 Crear Usuario

**Método:** `POST`  
**URL:** `http://localhost:3000/user/register`

### 🔸 Headers
```json
Content-Type: application/json
```
#### 🔸 Body (raw JSON)
{
  "U_name": "Juan Pérez 2",
  "U_email": "juan.perez@ejemplo.com",
  "U_password": "123456",
  "U_phone": "3001234567",
  "U_rol": 2,
  "U_estade": 1,
  "U_company": 1,
  "U_area": "soporte Call center"
}

#### Respuesta esperada
{
  "message": "Usuario registrado correctamente"
}

## 🧑‍💻 Login Usuario

**Método:** `POST`  
**URL:** `http://localhost:3000/user/login`

### 🔸 Headers
```json
Content-Type: application/json
```
#### 🔸 Body (raw JSON)
{
  "email": "juan.perez@ejemplo.com",
  "password": "123456",
}

#### Respuesta esperada
{
  "message": "Login exitoso",
    "user": {
        "id": 1,
        "name": "Juan Pérez Actualizado",
        "email": "juan.perez.diaz@ejemplo.com",
        "role": 2,
        "last_login": "2025-05-28T02:38:53.091Z"
    }
}

## 🧑‍💻 Consultar Usuario

**Método:** `GET`  
**URL:** `http://localhost:3000/user/`


#### Respuesta esperada
 {
  usuarios db
 }

## 🧑‍💻 Consultar Usuario ID

**Método:** `GET`  
**URL:** `http://localhost:3000/user/:id`


#### Respuesta esperada
{
  usuario ID
}

## 🧑‍💻 Actualizar Usuario

**Método:** `PUT`  
**URL:** `http://localhost:3000/user/1`

### 🔸 Headers
```json
Content-Type: application/json
```
#### 🔸 Body (raw JSON)
{
  "U_name": "Juan Pérez Actualizado",
  "U_email": "juan.perez.diaz@ejemplo.com",
  "U_phone": "3001234567",
  "U_rol": 2,
  "U_estade": 1,
  "U_company": 1,
  "U_area": "call center"
}


#### Respuesta esperada
{
  "message": "Usuario actualizado correctamente"
}



## 🧑‍💻 Eliminar Usuario ID

**Método:** `DELETE`  
**URL:** `http://localhost:3000/user/:id`


#### Respuesta esperada
{
  "message": "Usuario eliminado correctamente"
}
