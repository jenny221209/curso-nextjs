# curso-nextjs
Curso NC de Next.js

You.22 days ago  1 author (You)
### TABLA DE CONTENIDO

You.22 days ago  1 author (You)
### Create Next app

    -Crear proyecto

        $ npx create-next-app my-app


You.22 days ago 1 author (You)
### Ejecutar my app

    -Entrar al proyecto y ejecutar

        $ cd my-app

        $ npm run dev


### Images

    - Se debe instalar la libreria next-images para trabajar con imagenes SVG

        $ npm i next-images 

        - Despues de instalar se debe crear un archivo en la raiz llamado next.config.js y escribir las siguientes lineas de codigo

        const withImages = require('next-images')
        module.exports = withImages({})