import { useState, useEffect } from "react";

function Licznik() {
  const [licznik, setLicznik] = useState(0);

  useEffect(() => {
    console.log("Licznik zwiększył się do " + licznik);
  });

  useEffect(() => {
    console.log("Hello, World!");
  }, []);

  return (
    <div>
      <h1>Licznik</h1>
      <p>{licznik}</p>
      <button onClick={() => setLicznik(licznik + 1)}>Dodaj</button>
    </div>
  );
}

export default Licznik;
