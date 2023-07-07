import React from 'react';

function Header({ setCurrentPage, children }) {
  return (
    <div className='Header'>
        <h1 className='title'>{children}</h1>

        <div className="nav">
            <button onClick={() => setCurrentPage('todo')}>Todo</button>
            <button onClick={() => setCurrentPage('timer')}>Timer</button>
        </div>
    </div>
  )
}

export default Header;
