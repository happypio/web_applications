import React from 'react';
import './App.css';
import Logo from './Logo';

function HelloWorld() {
  // nalezy zwracac 'opakowane' elementy 

  // mozna tez: 
  //return <><p>Hello</p><p>World!</p></>;
  return ( 
    <React.Fragment>
      <p>Hello</p><p>World!</p>
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <HelloWorld/>
      </header>
    </div>
  );
}

export default App;
