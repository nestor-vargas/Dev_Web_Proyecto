# Como Inicializar el proyecto

1. Clonar el repositorio o descargar el archivo zip.

2. Instalar las dependencias con el comando `npm install` tanto para el backend como en el frontend.

3. modificar las variables de entorno en el archivo `.env` en la carpeta `backend` según sea necesario.

>**nota**: se debe crear de manera manual la base de datos con el nombre asignado en el archivo `.env` en el gestor de base de datos de preferencia para mayor comodidad.

4. Iniciar el servidor con el comando `npm run dev` en la carpeta `backend`.

5. Iniciar el frontend con el comando `ng serve -o` en la carpeta `frontend`.

6. Iniciar sesion como los dos usuarios creados automaticamente para ver las dos experiencias:

   1. **Usuario Administrador**:
        - **Email**: admin@uniguajira.edu.co
        - **Contraseña**: admin
    
    2. **Usuario Observador**:
        - **Email**: steven@uniguajira.edu.co
        - **Contraseña**: steven