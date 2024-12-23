import { useState } from 'react';

function Formularz() {

  const [inputValue, setInputValue] = useState('');

  return (
    <form>
      <input type="text" placeholder="Wpisz tekst..." onChange={(e) => setInputValue(e.target.value)}/>
      <div>{inputValue}</div>
    </form>
  );
}

export default Formularz;