import { useState } from "react";

function Aktualizacja() {
  const [cena, setCena] = useState(50);
  let product = { nazwa: "Pomidor", cena: cena };

  return (
    <>
      <div>
        <h1>Produkt: {product.nazwa}</h1>
        <p>Cena: {product.cena}</p>
      </div>
      <button
        onClick={() => {
          setCena(100);
          product = { ...product, cena: cena };
        }}
      >
        Zmień cene
      </button>
    </>
  );
}

export default Aktualizacja;
