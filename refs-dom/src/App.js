import React, { useRef } from 'react';

function App() {
  const inputRef  = useRef()

  const handleClick = () => {
    inputRef.current.focus()
  }

  return (
    <>
      Foco: <input ref={ inputRef } />
      <button onClick={ handleClick }>Focar</button>
    </>
  );
}

export default App;
