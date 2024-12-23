import { useState } from 'react'
import Przycisk from './Przycisk'

function Licznik() {

  const [licznik, setLicznik] = useState(0);

  return (
    <div>
      <h1>Licznik</h1>
      <p>{licznik}</p>
      <Przycisk onClick={() => setLicznik(licznik + 1)}/>
    </div>
  );
}

export default Licznik