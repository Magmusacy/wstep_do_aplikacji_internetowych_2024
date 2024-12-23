
function Przycisk({ onClick } : { onClick: () => void }) {
  return (
    <button onClick={onClick}>
      Dodaj
    </button>
  );
}

export default Przycisk
