import './App.css';
import React, { useState } from 'react'
import TimerApp from './Components/TimerApp'      //importing the default export from the module 
import  TodoApp from './Components/TodoApp'   //importing a specific named export - when the module exports multiple values or functions
import Header from './Components/Header'

function App() {
  const [currentPage, setCurrentPage] = useState('timer')

  const renderPage = () =>{
    switch(currentPage){
      case 'todo':
        return <TodoApp />;
      case 'timer':
        return <TimerApp />;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage}>{currentPage}</Header>  

      {renderPage()}

    </div>
  );
}

export default App;
