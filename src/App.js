import React from 'react';
import ClassCounter from './components/ClassCounter.js';
import HookCounter from './components/HookCounter.js';
//import HookCounterTwo from './components/HookCounterTwo.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <HookCounter/>
    </div>
  );
}

export default App;
