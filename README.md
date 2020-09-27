# GRUPO 4 - Rockolla

Proyecto del Grupo 4 del curso de Digital House Web Full Stack. El objetivo es crear una pagina web de ecomerce que se centre en la compra y venta de vinilos. 
Esto sitio web apunta a todos los amantes de la musica. 

## PÚBLICO
Con la revalorización que se le ha dado la música en vinilo, apuntamos a este mercado de gente que busca comprar música en un formato tangible y de excelente calidad analógica. Vemos en este mercado un nicho prometedor con potencial de crecimiento.

## INTEGRANTES DEL EQUIPO

    1. Daniela D'Alessandro: Tengo 21 años y estoy estudiando Relaciones Internacionales. 
    
    2. Facundo Erbin: Tengo 25 años, soy estudiante de Ingenieria en Sistemas, de hobby soy músico.
    
    3. Felipe Lopez Marsiglia: Tengo 21 años y estudio Abogacía. 

## SITIOS DE REFERENCIA

    1. Jarana Records: https://jaranarecords.com.ar/es/
    
    2. Music Jungle: https://musicjungle.cl/
    
    3. Amazon Music: https://www.amazon.es/Tienda-Vinilos/b?ie=UTF8&node=2384825031
    
    4. Baires Rocks: https://www.baires.rocks/

    5. La Casa del Disco: https://www.lacasadeldisco.es/j/vargas-blues-band-camiseta-del-sur-portada/

    6. CyJ Discos: http://cyjdiscos.com.ar/

    7. Zivals: https://www.zivals.com.ar/

## TECNOLOGÍAS

El proyecto esta desarrollado en Javascript usando el runtime NodeJS para el Backend. Se utiliza un servidor web Express. Para iniciar el proyecto, 
instale las dependencias con "npm install" en la carpete /Code y luego ejecute el proyecto con "node app.js" o "npm run dev" para hacer uso del middleware 
Nodemon.

## TABLERO DE TRABAJO
https://trello.com/b/yje419TK/grupo-4

## PARA ARRANCAR EL PROYECTO
    1. Instalar dependencias: desde la carpeta /Code ejecutar el comando
            npm install
    
    2. Configurar base de datos: para el proyecto utilizamos una base de datos MySQL, primero deberas configurarla desde el archivo 
    ./Code/database/config/config.json en la misma carpeta encontraras un archivo config.json.example, deberas copiar el contenido en el archivo config.json y 
    cambiar el usuario y contraseña del mismo. Tener en cuenta que el usuario que ingrese debe existir en su instancia de MySQL y debe poseer privilegios para 
    crear y modificar bases de datos.
    
    3. Crear la base de datos: deberas contar con sequelize-cli instalado globalmente en el sistema (sudo npm install sequelize-cli -g). Luego desde la 
    carpeta /Code ejecutá los comandoa
            sequelize db:create     (crear db)
            sequelize db:migrate    (migrar modelo a base de datos)
            sequelize db:seed:all   (poblar db con datos de ejemplo)
    4. Iniciar servidor: ahora ya podes iniciar el servidor con
            npm run startdev
    5. Ingresá al sitio: podrás acceder al sitio desde el navegador en la dirección
            localhost:3000
    6. Algunas consideraciones: podrás acceder las cuentas de usuario con la conntraseña cosmefulanito para cualquier usuario, excepto admin@mail.com 
    cuya contraseña es mysecretpassword. Cada tipo de usuario puede navegar por ciertos sitios de la página, y tiene restringido el acceso a otros.
           
