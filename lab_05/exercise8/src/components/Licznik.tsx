import { useState, useEffect } from "react";

function Licznik() {
  const initialLicznik: number =
    localStorage.getItem("licznik") !== null
      ? parseInt(localStorage.getItem("licznik")!)
      : 0;
  const [licznik, setLicznik] = useState(initialLicznik);

  useEffect(() => {
    console.log("Licznik zwiększył się do " + licznik);
    localStorage.setItem("licznik", licznik.toString());
  }, [licznik]);

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
