# 📘 Documentación de API - Gestión de Usuarios

## puerto sugerido
```
configuracion de base solo se cambia el puerto sugerido:

PORT = 3001
```
## 🧑‍💻 Crear tkt

**Método:** `POST`  
**URL:** `http://localhost:3001/tkt/`

### 🔸 Headers
```json
Content-Type: application/json
```
#### 🔸 Body (raw JSON)
{
  "tkt_Name": "Error en carga de informes",
  "tkt_Number": "TKT-20250527-001",
  "tkt_Description": "El sistema no permite cargar el archivo PDF en el módulo de informes.",
  "tkt_UserId_Sol": 1,
  "tkt_UserId_Assg": null,
  "tkt_Company_Id": null,
  "tkt_Stade_Id": 8,
  "tkt_Crit_Id": 3,
  "tkt_Rol_Id": 1,
  "tkt_Lvl_Id": 1,
  "tkt_type_Id": null,
  "tkt_EstimadeTime": null,
  "tkt_start": null
}


#### Respuesta esperada
{
  "message": "Ticket creado correctamente"
}


## 🧑‍💻 Consultar tkts

**Método:** `GET`  
**URL:** `http://localhost:3001/tkt/`


#### Respuesta esperada
 {
  tkts db
 }

## 🧑‍💻 Consultar tkt ID

**Método:** `GET`  
**URL:** `http://localhost:3001/tkt/:id`


#### Respuesta esperada
{
  tkt ID
}

## 🧑‍💻 Actualizar tkt

**Método:** `PUT`  
**URL:** `http://localhost:3001/tkt/:id`

### 🔸 Headers
```json
Content-Type: application/json
```
#### 🔸 Body (raw JSON)
{
  "tkt_Name": "Error en carga de informes actualizado",
  "tkt_Number": "TKT-20250527-001",
  "tkt_Description": "El sistema no permite cargar el archivo PDF en el módulo de informes. Error 500",
  "tkt_UserId_Sol": 1,
  "tkt_UserId_Assg": 1,
  "tkt_Company_Id": 2,
  "tkt_Stade_Id": 5,
  "tkt_Rol_Id": 2,
  "tkt_Lvl_Id": 3,
  "tkt_Crit_Id": 1,
  "tkt_type_Id": 1,
  "tkt_EstimadeTime": 48,
  "tkt_start": "2025-05-27T10:00:00"
}



#### Respuesta esperada
{
  "message": "Ticket actualizado correctamente"
}

## 🧑‍💻 Cerrar tkt ID

**Método:** `DELETE`  
**URL:** `http://localhost:3000/tkt/close/:id`


#### Respuesta esperada
{
  "message": "Ticket cerrado correctamente"
}


## 🧑‍💻 Eliminar tkt ID

**Método:** `DELETE`  
**URL:** `http://localhost:3000/tkt/:id`


#### Respuesta esperada
{
  "message": "Ticket eliminado correctamente"
}
