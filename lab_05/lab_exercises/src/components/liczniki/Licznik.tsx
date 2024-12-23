import { useState } from 'react'

function Licznik() {

  const [licznik, setLicznik] = useState(0);

  return (
    <div>
      <h1>Licznik</h1>
      <p>{licznik}</p>
      <button onClick={() => setLicznik(licznik + 1)}>Dodaj</button>
    </div>
  );
}

export default Licznik