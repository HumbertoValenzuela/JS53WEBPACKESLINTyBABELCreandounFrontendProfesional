// 3. Agregando Webpack
// Sintaxis de CommandJS

// crear archivo webpack.config.js
//<script src="public/js/bundle.js"></script>

// Para matar un servicio en la terminal, hacer click en el tacho de basura o ctrl +c
// Porque path, es para obtener la dirección actual, es decir,
// C:\htmlCSSJavaScript\JavaScriptModernoGuiaConstruye10Proyectos\Curso JS Moderno\53-Webpack-ESLint.BAbel
// Se realiza para no escribir toda la dirección
const path = require('path');


// creamos una entrada y una salida
module.exports = {
    // Archivo principal del proyecto
    entry: './js/app.js',
    output: {
        //__dirname para tomar la dirección 
        // Lo compila en public/js luego bundle.js
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
        // Escribe otro script en package.json
        // "webpack": "webpack"
        // Escribir en la Terminal npm run webpack
        // Esto compilará nuestros archivos
        // Escribir un modo (development o production) sino dará un Warning
        // "webpack": "webpack --mode=development"
        // El mode se puede agregar en package.json o webpack.confi.js
        
    },
    mode: 'development',
     // 5. Creando un Servidor con webpack dev server
    // Parecido al plugin Live-Server para VS Code. El de webpack funcionará en cualquier editor de código
    // En la Terminal npm i --save-dev webpack-dev-server
    devServer: {
        // A punta a la carpeta principal
        contentBase: path.join(__dirname, '/'),
        compress: true,
        port: 9000,
        // en package.json se agrega "dev": "webpack serve"
        // npm run dev
        //click en el link http://localhost:9000/
        // Lo que no hace, es que cada vez que realizo un cambio este se actualice solo.
        // Se soluciona añadiendo un watch
        publicPath: "/public/js",
        watchContentBase: true
    },

    // Ver el archivo bundle.js esto contendrá todo el código. Versión compilada con mayor performance
    // Mayor soporte ejemplo IE6 habilitar el loader de babel

    // 4. Agregando Babel por medio de Webpack
    // La forma de realizar es con loader es similar a un plugin
    // https://webpack.js.org/loaders/babel-loader/
    // npm install -D babel-loader @babel/core @babel/preset-env webpack
    // notar que anteriormente se instalaron los dos últimos
    // Ir a la terminal npm i --save-dev babel-loader
    // Se eliminan archivos entrada.js y salida.js
    // en la terminal: npm run webpack
    // Resultado: babel(Código transpilado) funcionando bajo webpack, 
    module: {
        rules: [
            {
                // Expresión regular que Busca todos los archivos js
                test: /\.js$/,
                // Excluir carpeta
                exclude: /(node_modules)/,
                // Utilizar babel
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            }
        ]
    }
 

    // 6. Agregando Live Reload
    // En package.json "watch": "webpack --w"
    // --w agrega el watch
    // "dev": "concurrently --kill-others \"npm run watch\" \"webpack serve\"",
    // "watch": "webpack --watch"  
    // instalar concurrently  
    // npm i --save-dev concurrently
    // De esta forma podemos correr dos o más script al mismo tiempo


    // 7. Añadiendo ESLint a nuestro código. https://eslint.org/
    // En VS Code ir a Extensions, instalar ESLint
    // Agregar ESLint al Proyecto - Terminal - npm i --save-dev eslint
    // Crear un archivo de ESLint. En la Terminal npx eslint --init
    // Te realiza una serie de preguntas. Te crea un archivo llamado .eslintrc.js
    // ¿Como ESLint ignora ciertos archivos? Presionar Ctrl Shif + p 
    // escribir json, dice Preferences: open settings se abrirá un archivo
    // {
    //     "files.autoSave": "afterDelay",
    //     "workbench.colorTheme": "Flatland Monokai",
    //     "diffEditor.wordWrap": "off",
    //     "editor.wordWrap": "on",
    //     "liveServer.settings.donotShowInfoMsg": true
    // }
    // Agregar la sgte línea  "main": ".eslintrc.js",
    // para realizar un chequeo completo de un archivo.js. En la Terminal npx eslint prueba.js

    // 8. Agregando la Guía de Estilos de Airbnb
    // https://github.com/airbnb/javascript
    // Requisitos Babel y requiere que uses babel-preset-airbnb, polyfills en su aplicación,
    //  con airbnb-browser-shims
    // Aierbnb tiene una seríe de buenas prácticas para escribir código
    // En la terminal npx eslint --init mostrará una serie de pregunta 
    // indicar enforce code style, Use a popular style guide - seleccionar Airbnb
    // Pregunta por instalar dependencias. respuesta yes

    // 9. Solucionar errores con ESlint y Airbnb StyleGuide
    // Corregir errores automaticamente con eslint y webpack
    // en la terminal npm i --save-dev eslint-loader
    // npm run dev entregará una serie de errores de código que se debe configurar para que se corriga
    // automaticamente
}