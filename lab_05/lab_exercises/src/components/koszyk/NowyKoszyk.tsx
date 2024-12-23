import Produkt from "./produkt";

function NowyKoszyk() {

  const produkty = ["Mleko", "Chleb", "Masło", "Ser", "Jajka"];

  return (
    <div>
      <h1>Koszyk</h1>
      <ul>
        { produkty.map((produkt, index) => <li key={index}><Produkt nazwa={produkt} /></li>) }
      </ul>
    </div>
  );
}

export default NowyKoszyk