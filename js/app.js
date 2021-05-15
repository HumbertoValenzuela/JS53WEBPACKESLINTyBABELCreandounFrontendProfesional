// ESLint podemos seguir "buensa prácticas" a la hora de
// escribir código.
// Soluconar problemas de código mientras lo escribimos
// Instalar una guía de Estilos como Airbnb

// Babel. Un arrow function no funciona en navegador IE6.
// Si necesitas soporte a navegadores antiguos, escribiendo
// código moderno soportando ese tipo de navegadores.
// es decir, el código moderno es transpilado a antiguo

// WebPack
/* Compila "assets" o archivos estáticos en un Bundle.
Bundle piensa que es una caja grande que contiene todos
los archivos que se requieren en el proyecto; Agregar
archivos de Sass, archivos js. El Bundle va a
generar un solo archivo para todos ellos optimizado por
de WebPack. La Idea es mejorar el performance
WebPack se integra bien con ESLint y Babel
Permite crear un Servidor de Desarrollo
Permite un Hot Reload para los cambios, es una especia
live Server pero WebPack lo lleva a otro nivel */

// Crear un Front End profesional con webpack, ESLint y
// Babel

// 2. Transpilando el Código con Babel
// En la Terminal npm init
// npm install --save-dev @babel/cli @babel/core @babel/preset-env
// Crear un archivo entrada.js
// npx babel entrada.js --out-file salida.js --presets=@babel/preset-env
// Se puede dejar en el package.json en "scripts"
// "babel": "babel entrada.js --out-file salida.js --presets=@babel/preset-env"
// npm run babel

import App from './classes/App';

App();

// console.log('hoxxxxxxxxxxla');
