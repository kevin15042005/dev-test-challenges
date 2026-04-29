## A. Instalacion

**Instalacion de react vite : npm create vite@latest mini-app -- --template react
**Dependencias node modules y package json: npm install
**Configuración de .env: Creación de .env para la URL de la API (https://jsonplaceholder.typicode.com/users)

## B.  Componentes 

    **Se crea una carpeta el cual contendra los componentes para el historial la buscqueda y la vista de los Card
    **Uso de useState para manejar el resultado de la API y un array para el historial. Se aplicaron condicionales (Renderizado condicional) para mostrar la Card solo cuando hay datos.

## C. Union Componentes con App
    **Se trae los prop de padre a el hijo
    ** Se  comunican para pasar funciones como props del Padre al Hijo para capturar la entrada del usuario.
    **Implementación de async/await para el consumo de la API pública.
    **Se hace la importacion de cada uno de los componentes y se adiciona con el page padre 
    **Se inserta el componentes de esta forma : <Card/> solo con uno 


## D. Correr en la Web 

    **Escribimos npm run dev para corra en el la web  en local
