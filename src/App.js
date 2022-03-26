import React, {useState, useEffect} from 'react';
import Scene from './components/scene';
import dataScene from './helpers/dataScene';

const App = () =>{
  return (
    <div>
      <Scene  scene={dataScene}/>
    </div>
  )
}

export default App;
