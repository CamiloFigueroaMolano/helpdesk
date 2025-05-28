# 🎧 HelpDesk - Sistema de Gestión de Tickets

Bienvenido/a al sistema **HelpDesk**. Este proyecto permite gestionar usuarios y tickets técnicos, usando Node.js y MySQL en una arquitectura modular.

---

## ⚙️ Preparación del Entorno

### 1. Clonar el Repositorio

```bash
git clone https://tu-repo-url
```

---

### 2. Crear la Base de Datos en MySQL

1. Abre tu cliente MySQL.
2. Carga una nueva query.
3. Copia el contenido del archivo:

```
Backend/Backend_DB/tktDb.txt
```

4. Pégalo y ejecútalo en MySQL.

> Esto creará la base de datos, sus tablas, y datos esenciales para el funcionamiento del sistema.

---

### 3. Instalar Dependencias del Backend

#### 📂 Backend de Usuarios

1. Abre tu editor de código (ej: VSCode).
2. Dirígete a la carpeta:

```
backend/backend_users
```

3. Abre una terminal en esa carpeta y ejecuta:

```bash
npm install
```

#### 📂 Backend de Tickets

Repite el mismo procedimiento en:

```
backend/backend_tickets
```

---

### 4. Crear Archivos `.env`

Dentro de **cada carpeta** (`backend_users` y `backend_tickets`), crea un archivo llamado:

```
.env
```

Configura ahí las credenciales de tu base de datos, por ejemplo:

```
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=helpdesk_db
DB_PORT=3306
```

---

### 5. Ejecutar los Servicios

Desde la terminal de cada servicio (`backend_users` y `backend_tickets`), corre:

```bash
npm start
```

Esto levantará ambos servidores de forma independiente.

---

### 6. Pruebas con Postman

1. Abre Postman.
2. Importa las colecciones de prueba ubicadas en las carpetas:

```
backend_users/postman/
backend_tickets/postman/
```

3. Ejecuta las pruebas **empezando por el servicio de usuarios**, ya que el sistema de tickets depende de usuarios ya creados.

---

## 📌 Notas Finales

- Asegúrate de tener MySQL activo antes de iniciar los servidores.
- Si haces cambios en los `.env`, reinicia los servicios.
- Revisa tu archivo `.gitignore` para evitar subir `.env` y `node_modules`.

---
