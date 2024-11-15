
# A08_API_MySQL

Este proyecto es una API REST desarrollada con Node.js, Express y MySQL, diseñada para gestionar un sistema de posts y autores. 

## Descripción del proyecto

La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) tanto para posts como para autores, con funcionalidades adicionales como la recuperación de todos los posts escritos por un autor específico. 

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes componentes:

- Node.js (versión 14 o superior)
- MySQL (versión 5.7 o superior)
- Postman o un cliente REST similar (opcional para pruebas)
- Git

## Instalación

Se deberan estos pasos para instalar y configurar el proyecto:

1. Clonar el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Acceder al directorio del proyecto:
    ```bash
    cd A08_API_MySQL
    ```
3. Instalar las dependencias:
    ```bash
    npm install
    ```
4. Configurar las variables de entorno en un archivo `.env`:
    ```env
    PORT=3666
    DB_HOST=localhost
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=A08_Blog
    ```

## Uso

1. Iniciar el servidor:
    ```bash
    npm start
    ```
2. La API estará disponible en `http://localhost:3666/api`.

3. Utilizar los archivos `peticiones_autores.rest` y `peticiones_posts.rest` para realizar pruebas de las rutas utilizando un cliente REST.

## Estructura de la base de datos

### Tabla `autores`
| Campo       | Tipo         | Descripción                  |
|-------------|--------------|------------------------------|
| id          | INT          | Identificador único          |
| nombre      | VARCHAR(60)  | Nombre del autor             |
| email       | VARCHAR(60)  | Correo electrónico (único)   |
| imagen      | VARCHAR(255) | URL de la imagen del autor   |

### Tabla `posts`
| Campo         | Tipo         | Descripción                      |
|---------------|--------------|----------------------------------|
| id            | INT          | Identificador único              |
| titulo        | VARCHAR(255) | Título del post                  |
| descripcion   | TEXT         | Descripción del post             |
| fecha_creacion| DATETIME     | Fecha de creación                |
| categoria     | ENUM         | Categoría del post (ej. libros)  |
| autores_id    | INT          | Referencia al autor (clave foránea) |

## Rutas disponibles

### Rutas de Autores
- `GET /api/autores`: Recuperar todos los autores.
- `GET /api/autores/:autor_id`: Recuperar un autor por ID.
- `POST /api/autores`: Crear un nuevo autor.
- `PUT /api/autores/:autor_id`: Actualizar un autor existente.
- `DELETE /api/autores/:autor_id`: Eliminar un autor.

### Rutas de Posts
- `GET /api/posts`: Recuperar todos los posts.
- `GET /api/posts/:post_id`: Recuperar un post por ID.
- `GET /api/posts/autor/:autor_id`: Recuperar todos los posts de un autor específico.
- `POST /api/posts`: Crear un nuevo post.
- `PUT /api/posts/:post_id`: Actualizar un post existente.
- `DELETE /api/posts/:post_id`: Eliminar un post.

## Créditos

Proyecto desarrollado como parte de la Actividad 8 del Máster en Full Stack Developer (UNIR).
Henry Daniel Martínez Bustamante