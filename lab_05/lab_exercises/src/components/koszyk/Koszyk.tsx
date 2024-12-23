import Produkt from "./produkt";

function Koszyk() {
  return (
    <div>
      <h1>Koszyk</h1>
      <ul>
        <li key={1}><Produkt nazwa="Mleko" /></li>
        <li key={2}><Produkt nazwa="Chleb" /></li>
        <li key={3}><Produkt nazwa="Masło" /></li>
        <li key={4}><Produkt nazwa="Ser" /></li>
        <li key={5}><Produkt nazwa="Jajka" /></li>
      </ul>
    </div>
  );
}

export default Koszyk