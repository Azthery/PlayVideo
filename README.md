# Apuntes del **curso Practico de React JS** dado por Platzi

Repositorio para el uso didactico en el desarrollo del curso Practico de React JS, junto con el proyecto _"PlayVideo"_ y apuntes del curso ya nombrado.

**Proyecto desplegado:** [https://azthery.github.io/PlayVideo/dist/index.html](https://azthery.github.io/PlayVideo/dist/index.html)

## **Creando una aplicación con Create React App**

React es una libreria de **JavaScript** para **crear interfaces de usuario**, esta podremos integrarla manualmente para crear nuestra app, pero existe una forma mas **sencilla**, eso es con **Create React App**, que nos ahorrara muchos pasos.

Para crear una aplicación con **Create React App** solo necesitaremos tener versiones de **Node >= 10.16 y npm >= 5.6** instaladas, para instalar la ultima version Node lo podremos descargar [aqui](https://nodejs.org/es/).

Luego de cumplir con los rquisitos podremos hacer uso de nuestra consola de comandos, ejecutando:

```zsh
npx create-react-app <my-app>
```

Con esto se nos generar un carpeta con el nombre ingresado en `<my-app>`, la cual vendra preconfigurada para trabajar en React.

Para desplegar la nuestra app debemos ubicarnos en la capeta en consola e ingresar:
```zsh
npm start
```
Con esto se abrira una nueva pestaña en el navegador, y podremos ver los cambios mientras trabajemos.

_____________________________________________________________________________________________________

## Extención **.jsx**

JSX es una extension de la sintaxis de JavaScript recomendada usarla en React, la cual permite insertar codigo HTML, eso es perfecto para crear elementos React, ejemplo:
```jsx
const element = <h1>Hello Mundo</h1>
```
Permitiendo combinar `js` con `html`
```jsx
const item = {
    name: "Apple",
    price: 4
}
let element = <p>{item.name} : ${item.price} </p>
```
_____________________________________________________________________________________________________


## Compomentes

Los componentes son una caracteristica de React que nos permite modular, idependizar y da lugar a la reeutilizacion del codigo.
Esto nos permite tener una vision mas limpiar y general del codigo (cuando se lleva a cabo buenas practicas).
De estos en react tenemos de 3 tipos, los cuales son:

- **Stateless** o **Componentes funcionales**: 
Se llaman "funcionales" por que literalmente **son una función** de JavaScript, devuelven un **elemento react**, contienen logica y reciben como parametro un objeto "prop"
```jsx
const Stateless = (props) =>{
  const name = props.name;
  const procentage = (props.amount / props.amountTotal) * 100;
    return(
        <h1>There is {procentage}% {name}</h1>
    );
};
```

- **Stateful** o **Componentes de clase**:
Estos estan compuesto por una clase de JavaScript, posee las misma caracteristica que los **stateless**, sin embargo estos tambien poseen estado `state`, ciclo de vida y son capaces de manejar eventos.
```jsx
import React from 'react';

class Stateful extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hello: 'Hola Mundo'
    }
  }
  render(){
    return(
      <h1>{this.state.hello}</h1>
    )
  }
}
```

- **Presentacionales**:
Estos son los mas basicos de todos, no poseen logica, estados, ni propiedades, es solamente una funcion simple que retorna un elemento.
```jsx
const Presentacional = ()=> <h1>Hola mundo tres veces</h1>;
```

>**Los props jamas deben de ser modificados**

_____________________________________________________________________________________________________

## **Renderizando un componente**

Los componentes en React son **llamados en el DOM** como un **elemento react**, donde sus el **parametro** que recibe el componente no es mas que una **propiedad** del mismo **elemento react**.

Esto quiere decir que si creamos el componente tal que:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
Este lo llamamos asi:
```jsx
const element = <Welcome name="Sara" />;
```
Para luego mandarlo al render en el DOM:
```jsx
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Recapitulando:
1. **Llamamos** a `ReactDOM.render()` con el **elemento** `<Welcome name="Sara" />`.
2. React llama al **componente** Welcome con `{name: 'Sara'}` como **“props”**.
3. Nuestro **componente Welcome devuelve un elemento** `<h1>Hello, Sara</h1>` como resultado.
4. **React DOM actualiza** eficientemente el DOM para que coincida con `<h1>Hello, Sara</h1>`.


Los componentes pueden ser "llamados" desde otros componentes, asi anillandolos como unas muñecas rusas _mamushka_, formando codigo el cual se puede reciclar facilmente.

>_Apuntes inspirados de la documentacion de React_
_____________________________________________________________________________________________________

## **Ciclo de vida**

**Todos los componentes** en React pasan por una **serie de fases**, en algunos casos no podemos **verlos** como un **bloque de código** y en otros **podemos llamarlos** en nuestro componente para asignar una actividad según sea el caso necesario.

Los componentes pasan por Montaje, Actualización, Desmontaje y Manejo de errores, sin embargo un componente **NO** debe de pasar por todas estas fases, por ejemplo puede pasar por el ciclo de Montaje y Desmontaje sin necesidad de pasar por la actualización.

- ### **Montaje**
    Nuestro componente se **crea**, junto con su logica y sus componentes, para luego ser insertado en el DOM.

    <u>Detalles:</u>

    1. `Constructor()`: Primer metodo en ser llamado, donde en este se inicializan los metodos los controladores y eventos de esta.
    2. `getDerivedStateFromProps()`: Se llama antes de presentarse en el DOM y nos permite actualizar el estado interno en respuesta a un cambio en las propiedades, es considerado un método de cuidado, ya que su implementación puede causar errores sutiles.
    3. `render()`: Este renderiza los elementos en el DOM, en el ingresamos logica y lo que querramos mostrar en el DOM, usualmente se utiliza con `.jsx`.
    4. `ComponentDidMount()`: Aqui es donde trabajamos con eventos para interactuar con nustros componentes.

- ### **Actualización**
    Es Donde nuestro componente esta antento a cambios, los cuales pueden venir atraves de `state` o `props`, lo cual realiza una acción dentro del componente.

    1. `getDerivedStateFromProps()`: Es el primero en ser ejecutado en esta face y funciona de igual manera que en el montaje.
    2. `shouldComponentUpdate()`: Dentro se puede controlar la fase de actualización, devuelve un bool para el caso de querer o no una actualización, es usado para optimización.
    3. `render()`: Genera los cambios en el DOM.
    4. `ComponentDidUpdate()`: Es llamado despues de que se ha actualizado el componente, recibe como argumento las propiedades y el estado, es donde podemos manejar nuestro componente.
    
- ### **Desmontaje**
    Esta etapa es donde el componente "muere", cuando ya no sea necesario el elemento podemos pasar por este ciclo, y de esta forma eliminar el componente del DOM.

    - `componentWIllUnmount()`: Metodo llamado justi antes de que el componente sea destruido o eliminado del DOM.

- ### **Manejo de errores**
    En el caso de que nuestro codigo contenga errores, podemos entrar a esta fase donde podremos entender mejor el error mismo, y que sucede en la app.
    1. `getDerivedStateFromError()`: Este recibe el error como argumento y cualquier valor devuelto por el motodo utilizado para actuazar el estado del componente.
    2. `componentDidCatch()`: Recibe el error como argumento, junto con su información (similar a un catch).

_____________________________________________________________________________________________________

## Manejando **Eventos**

Los eventos son sucesos o cambios dentro de la app, esto puede ser un boton presionado por el usuario, o informacion externa, nuestra app debe de reaccionar ante estos eventos.
En React, reacciona muy similarmente ante a los eventos de HTML y js tradicionales, con unas cuantas diferencias de syntax.

- Considerar usar `.jsx`

Usaremos de ejemplo un componente:
```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

Donde el evento se desencadena desde:
```jsx
render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
```

Que ejecuta la funcion:
```jsx
handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
```

_____________________________________________________________________________________________________

## **Instalación** y **configuración** de entorno

Para inicializar y configurar correctamente tu proyecto sigue los siguientes pasos en consola:

1. `mkdir <NombreDeLaCarpeta>` para crea tu carpeta
2. `cd <NombreDeLaCarpeta>` entrar en ella
3. `git init` Inicializar **git**
4. `npm init -y` inicializar npm automáticamente

Generar una estructura la cual es un estándar la cual es tal que

![ejemplo](./apuntes/estandar_react.jpg)

Procederemos a **instalar** **React**
```zsh
npm install react react-dom
```

Este nos generara unos archivos en la carpeta, los cuales nos quedaran tal que asi:

![ejemplo](./apuntes/estandar_react2.jpg)

Notaremos en nuestro archivo `package.json`, posee unas nuevas dependencias:
```json
"dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
```
_____________________________________________________________________________________________________

## Configurando y dando Compatibilidad con **Babel**

Crearemos un componente, llamado `HelloWorld.jsx` en `./src/componets/HelloWorld.jsx`, el cual es:
```jsx
import React from 'react';

const HelloWorld = () => {
    <h1>Hola Mundo!</h1>
};

export default HelloWorld;
```

Ahora configuraremos nuestro punto de entrada, el archivo `index.js` en `./src/index.js`:
```jsx
import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./componets/HelloWorld";

ReactDOM.render(<HelloWorld />, document.getElementById(app));
```
Se renderizara en el DOM nuestro componente `HelloWorld.jsx`.

Para que sea desplegada la app necesitaremos un archivo html, es decir nuestro archivo `index.html` ubicado en `./public/index.html`

```html
<!DOCTYPE html>
<html>
<head>
    <title>Play Video</title>
</head>
<body>
    <div class="app">
        
    </div>
</body>
</html>
```

Finalmente una vez hayamos **configurado correctamente** nuestra base de la app, instalaremos **babel**, con el **comando**:
```zsh
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

Para **configurar babel**, debemos de **crear** un nuevo archivo llamado `.babelrc`, el cual ir en la carpeta raiz de proyecto, este archivo contiene:
```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

_____________________________________________________________________________________________________

## **Webpack**: Empaquetando nuestros módulos

Webpack es una herramienta que nos ayudara preparar nuestro proyecto, para enviarlo a producción o entorno de desarrollo local.
Lo que hace webpack es como si empaquetada de manera optimizada todo nuestro proyecto y los deja listo para enviar.

Para instalarlo ejecutamos
```zsh
npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev
```

Una vez instalado, lo configuraremos con un archivo `webpack.config.js` que ubicaremos en la carpeta **raiz**, en este agregaremos:
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /apuntes/],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      historyApiFallback: true,
      port: 3006,
      open: true
  }
};
```

Una vez "escrito" todo este largisimo codigo _giño giño_, nos moveremos al archivo `package.json`, **agregaremos** un `script`, tal que:
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode production"
  }
```

Finalmente una vez hecho todo esto podremos irnos a nuestro proyecto en consola y **ejecutaremos**:
```zsh
npm run build
```

Con esto se creara una carpeta llamada dist, que tendra todo nuestro codigo listo para se desplegado a produccion.

_____________________________________________________________________________________________________

## **Webpack Dev Server**: Reporte de errores y Cambios en tiempo real

Una gran ayuda es por **probar** lo que vamos construyendo, para esto usaremos **Webpack Dev Server**

Instalaremos esto con:
```zsh
npm install webpack-dev-server@3.11.2 -D
```

Ahora solo debemos **crear** un `scrip` en nuestro archivo `package.json`
```json
"scripts": {
    "start": "webpack serve --mode development --env development"
  }
```
_____________________________________________________________________________________________________

## Añadiendo preprocesador **SASS** a **WebPack**

`sass` nos permite trabajar con `css` y añadile unas nuevas sintaxis, que hara mas agradable trabajar con `css`.

Para **instalar** `sass`
```zsh
npm install mini-css-extract-plugin css-loader node-sass sass-loader -D
```
Una vez instalado este paquete, lo agregaremos al `webpack.config.js`, lo agregaremos como una nueva regla en `rules: []`, importart el plugin yagregar el plugin:
```js
{
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module:{
    rules:[
      {
      test: /\.(s*)css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        'css-loader',
        'sass-loader'
        ]
      }
    ]
  },
  plugins :[
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    })
  ]
}
```

Cosa que todo nustro archivo deba de verse tal que:
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /apuntes/],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    })
  ],
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      historyApiFallback: true,
      port: 3006,
      open: true
  }
};
```

Ahora debemos de crear la carpeta llamada **assets** en la cual dentro crearemos otra llamada **styles** , tal que `./src/assets/styles` en donde **guardaremos** nuestros archivos `.sass`.

>**assets** sera la carpeta donde guardaremos todos nuestros recursos visuales

dentro de **styles** crearemos un archivo llamado **App.scss**, tal que `./src/assets/styles/App.sccs`

_____________________________________________________________________________________________________

## **ESlint**

Eslint es una herramienta para evitar errores y tener buenas practicas.

Para instalarlo ejecutaremos en consola
```zsh
npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y -D
```

Luego de esto crear un archivo en la raiz, con el nombre de `.eslintrc`, y en nuestro caso te recomendamos usar la configuración que encontraras en [aqui](https://gist.github.com/gndx/60ae8b1807263e3a55f790ed17c4c57a).

## **gitignore**

Generalmente en nuestro proyecto tenemos archivos que **no** querramos agregar a git, ya que son muy pesados, por seguridad, etc.
Para esto existe `.gitignore`, el cual le dice a git que archivos debe **ignorar**.

El uso de git ignore es simple, solo en la **carpeta raiz** crea un archivo `.gitignore`, y dentro agrega por linea el repositorio, archivo o extensiones que quiere que git ignore, en este proyecto recomendamos usar [esta configuración](https://gist.github.com/gndx/747a8913d12e96ff8374e2125efde544).

_____________________________________________________________________________________________________

## **Dando forma a nuestra app en React**

En nuestra carpeta **src**, dentro hay **dos carpetas** que destacan **components** y **container**.
- **Components**: Aqui es donde despositaremos nuestro componentes. 
- **Container**: En esta carpeta guardaremos nuestros containers, estos son componentes que dentro desplegan mas componentes, esto es para llevar un mayor orden de una estructura mas macro.

En nuestra carpeta **container** agregaremos un nuevo componente denominado **App.jsx** este sera nuestro container **principal**, donde desplegaremos todos los demas container y componentes.

Mostraremos esto en un ejemplo con pasos:

1. Crearemos un componente, en este caso sera un `header`, en `./src/components/Header.jsx` tal que:
```jsx
import React from 'react';

const Header = () =>{
    return(
        <header className="header">
            <img className="header__img" src="../assets/logo.png" alt="Play Video"/>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src="../assets/user-icon.png" alt=""/>
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
            </div>
        </header>
    )
};

export default Header;
```

2. Crearemos nuestro archivo **App.jsx** en `./src/container/App.jsx`, en el cual integraremos el compuesto anterior que sera tal que:
```jsx
import React from 'react';

import Header from '../components/Header';

const App = () => {
    return(
        <div className="app">
            <Header />
        </div>
    )
}

export default App;
```

3. Finalmente en **index.js** renderizaremos la **App.jsx**:
```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from './container/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
```

_____________________________________________________________________________________________________

## **Añadiendo imágenes con Webpack**

Para trabajar con imagenes en Webpack, debemos de agregale una nueva regla en `webpack.config.js`
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[hash].[ext]' },
          }
        ],
      },
  }
}
```
    
_____________________________________________________________________________________________________

## **Estilos en componentes, integrando SASS (.scss)**

Añadir estilos es realmente facil, solo debes ir al componente e importar
Ejemplo:
```jsx
import '../assets/styles/App.scss';
```

_____________________________________________________________________________________________________

## **Trabajando con SASS (.scss)**

SASS es un preprocesador de CSS, en palabras simples SASS nos otorga mas funcionalidades a css, las cuales nos ayudara a en gran medida en nuestro desaroollo.

- **Variables**:
Nos permite guardar variables con valores para sccs.
```sccs
$color-font: red;

body{
    color: $color-font;
}
```

- **Mixin y include**:
**@
mixin** es una variables que guardan un grupo de propiedades listas, las cuales se incluyen con **@include** en alguna clase, etiqueta o id.
```sccs
@mixin list-items {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin horizontal-list {
  @include list-items;
```

- **Import**
**@import** nos permite importar el contenido de un archivo externo de .sccs, es decir, de un archivo vars.sccs hacia un `index.sccs`
```sccs
// vars.sccs
code {
  font-family: 'Source Code Pro', Helvetica, Arial;
  border-radius: 4px;
}
```

```sccs
// index.sccs
@import "./vars.sccs";
```

- **Extend**
**@extend** Nos permite extender nuestro estilos a otra clase, id o etiquetas.
```sccs
.font{
font: sans;
color: white;
}
.title{
@extend .font;
font-size: large;
}
```
________________________________________________________

## **Creando una Fake API con json-server**

`json-server` es un componente, que simula que es una api real de forma local, es decir despliega un archivo `.json` en nuestro `localhost`

Para ello debemos de **instalar** json-server
```zsh
sudo npm install json-server -g
```

Ahora podremos ejecutar un archivo `json` como si fuera de una api, con:
```zsh
json-server <archivoJson.json>
```
o en **Windows 10** con:
```zsh
npx json-server --watch <archivoJson.json>
```

____________________________________________________________________________

## **React Hooks**: **useEffect** y **useState**

React Hooks nos permite agregar estado y ciclo de vida a nuestros componentes creados como funciones

>Hooks esta disponible a partir de la versión 16.8

Para hacer uso de las funcionalidad que vamos a ver a continuacion debemos de **importarlas**:
```jsx
import {useState, useEffect} from 'react';
```

- ### **useState**: Maneja estados, es decir con el podemos darle el **estado** inicial por defecto, o que querramos a nuestro componente.
Esta en si es una **funcion** donde su **primer parametro** es el **valor de nuestro estado**, y el **segundo parametro** es una **funcion que nos permitira actualzar** este valor, esto quiere decir que el segundo parametro lo usaremos con **userEffect**.
```jsx
const [ videos, setVideos ] = useState([]);
```
<u>**Parametros**</u>:
  1. `videos`, nombre de la **variable** que contiene el **estado**.
  2. `setVideos`, **función** que nos permite **modificar** el **estado**.

> Sin embargo en nuestra app usaremos
>```jsx
>   const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
>```
>Para evitar errores

- ### **userEffect**:
Hacer **trasmisiones**, esto quiere decir que este hook podemos **actualizar** el estado definido en **UserState**.
userEffect recibe como **primer parametro** un **función** donde ira la logica, y como **segundo parametro** es una **array** donde podemos especificar que propiedades deben cambiar para que React vuelva a llamar nuestro código, si no enviamos este parametro por defecto se ejecutara cada vez que React se actualice, enviarle un **array vacio** hara que se ejecute solo al montar y desmontar el componente.
```jsx
useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);
```
<u>**Parametros**</u>:
1. `( ) => { }`, una funcion anonima.
2. `[]`, una array vacia que hara que el codigo solo se actualce al montar y ser desmontado.

____________________________________________________________________________

## **Conectando la información de la API**

A continuacion haremos uso de de la información de la API sobre nuestra app, integrando esos datos a nuestros componentes.

Hare que la categoria `Mi lista` se desplegue cuando tengamos contenido en la misma, en caso contrario no se desplegara.
```jsx
{videos.myList?.length > 0 &&
  <Categories title="Mi lista">
      <Carousel>
          <CarouselItem />
      </Carousel>
  </Categories>
}
```
Si ponemos atencion tenemos un `?` en `videos.myList?`, que significa esto?
Este es un un pequeño `if`, preguntara si esta propiedad **existe**.
Y el elemento `&&` conectara con el elemento a desplegar

Ahora desplegaremos cada uno de los elementos de `Tendencias`, de la siguiente manera
```jsx
<Categories title="Tendencias">
    <Carousel>
        {videos.trends.map(item =>
            <CarouselItem key={item.id} {...item}/>
            )}
    </Carousel>
</Categories>
```
En donde podremos iterar cada uno de los elementos de `videos.trends` el cual se trata de un array, y a la vez entregandole los datos a `<CarouselItem/>`, los cuales llegaran como argumento en el `prop` al componente.

____________________________________________________________________________

## **Custom Hooks**

React nos permite crear nuestros **propios** Hooks. Solo debemos seguir algunas convenciones:

1. Los hooks siempre deben empezar con la palabra **use**: `useAPI`, `useMovies`, `useWhatever`.
2. Si nuestro custom hook nos permite consumir/interactuar con dos elementos (por ejemplo, title y setTitle), nuestro hook debe devolver un array.
3. Si nuestro custom hook nos permite consumir/interactuar con tres o más elementos (por ejemplo, name, setName, lastName, setLastName, etc.), Nuestro hook debe devolver un objeto.

Para crear nuestro **custom hook** solo debemos de integrarlo en una nueva carpeta en **src** denominada **hooks**, tal que `./src/hooks/`

Una vez dentro integraremos el archivo, usndo siempre la **convension 1**, este debe de tener como base siempre:
> A menos que se necesite, este archivo puede ser tranquilamente un `.js`
```js
const useCustomHook = () =>{
  //logica
  return ( );
}

export default useCustomHook;
```

Como ejemplo podemos ver nuestro custom hook del proyecto:
```js
import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [videos, setVideos] = useState({ 
        mylist: [],
        trends: [],
        originals: []
        });
    
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);
    return videos;
}

export default useInitialState;
```
____________________________________________________________________________

## **PropTypes**

Los PropTypes son una propiedad de nuestros componentes que nos permiten especificar qué **tipo de elementos** son nuestras **props**: arrays, strings, números, etc.
Practicamente nos permite typar el las variables como si fuera `TypeScript`, pero enfocado a nuestro componentes como etiquetas de html, con una sisntaxis diferente.

Se instala con el siguiente comando:
```zsh
npm install --save prop-types
```

Para usarla debemos de importarla en nuestro archivo
```js
import PropTypes from 'prop-types';
```
Y para hacerle uso, tenemos el siguiente ejemplo:
```js
const Component = { name, lastName, age, list }

Component.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  list: PropTypes.array,
};
```

Por defecto, enviar todas nuestras props es opcional, pero con los propTypes podemos especificar cuáles props son obligatorias para que nuestro componente funcione correctamente con el atributo isRequired.
```js
Component.propTypes = {
  name: PropTypes.string.isRequired,      // obligatorio
  lastName: PropTypes.string.isRequired,  // obligatorio
  age: PropTypes.number,                  // opcional,
  list: PropTypes.array,                  // opcional
};
```

____________________________________________________________________________

## **React Dev Tools**

Esta es una herramiente increiblemente util a la hora de desarrollo, la cual nos permitira inspecionar nuestra aplicacion en react de una forma correcta.

Si no la tenemos instalada en nuestero navegar, podemos encontrarla muy facil.
Solo debemos de:
1. Ir a al inspector de elemento en la pestaña de nuestra app en react con `Ctrl + Shift + C`.
2. Seleccionar en la interfaz de la parte superior `Console`.
3. El primer mensaje nos dara un link hacia la pagina de React donde nos recomienda descargar una extension para nuestro navegar.
4. Sellecionamos nuestro navegador.
5. Instalamos la extension.
6. Reiniciamos nuestro navegar
7. Abrimos nuestro inspector de elemento con `Ctrl + Shift + C` y la interfaz superior debemos de buscar l opcion `Components` que tiene el icono de React.

