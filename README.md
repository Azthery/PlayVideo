# Apuntes del **curso Practico de React JS** dado por Platzi

Repositorio para el uso didactico en el desarrollo del curso Practico de React JS, junto con el proyecto _"PlayVideo"_ y apuntes del curso ya nombrado.

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
