# platzi-conf-merch
- Tienda Online creada desde cero en React para el curso profesional de React Hooks

# ¿ Que se utilizara en el proyecto ? 
- Hooks de React
- Tener productos
- Elegir producto
- Pagos
- API de Paypal para integrar pagos
- Estado de pedido, hacia donde sera enviado
- Api Google maps
- Crear Api propia con Strapi para tener productos ofrecidos
- enviar a produccion
- optimizacion de SEO
- Enviar a producción

--------------

## Configuracion inicial
- git init
- npm init -y
- npm install react react-dom

# Webpack y Babel: presets, plugins y loaders
- npm install webpack webpack-cli webpack-dev-server --save-dev
- npm install html-webpack-plugin html-loader --save-dev
- npm install babel-loader  @babel/preset-env @babel/preset-react @babel/core --save-dev
- npm install css-loader mini-css-extract-plugin --save-dev
- npm install sass sass-loader --save-dev
- npm install -g eslint
- configuracion de webpack.config.js
- configuracion de .babelrc
- npm install eslint @babel/eslint-parser eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
- .eslintrc y configuracion de archivo
- npm install prettier eslint-plugin-prettier eslint-config-prettier
- Alternativa : 
1. eslint-plugin-prettier
2. eslint-config-prettier
3. prettier
- .prettierrc y configuracion del archivo
- GIt Hooks con Husky:
- Husky es una herramienta que nos permite ejecutar Git Hooks de forma más amigable y sencilla con los cuales vamos a garantizar que se corren las pruebas pertinentes en nuestro código y de esta forma no enviar un bug o inconsistencias al repositorio del proyecto.
- npm install husky --save-dev
- Configuracion de husky en el package.json

## Integracion con Paypal
- npm i react-paypal-button --save --legacy-peer-deps

# NOTA
- npm docs Nombre-paquete : para ir a la documentacion de cada paquete