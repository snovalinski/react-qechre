import React from 'react';
import { render } from 'react-dom';

const Saludo = () => {
  const nombre = "Susan";
  return <p> Hola {nombre} </p>;
};
const App = () => {
  return <h1><Saludo /></h1>;
};

render(<App />, document.getElementById('react-app'));
