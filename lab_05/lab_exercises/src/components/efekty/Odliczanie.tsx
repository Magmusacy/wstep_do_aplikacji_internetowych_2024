import { useEffect, useState } from "react";

function Odliczanie() {
  const [licznik, setLicznik] = useState(15);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isActive) {
      interval = setInterval(() => {
        setLicznik((prev) => {
          if (prev - 0.1 < 0) {
            clearInterval(interval);
            return 0;
          }
          return prev - 0.1;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  function toggleCounting() {
    setIsActive((prev) => !prev);
  }

  return (
    <>
      <div>
        <h1>Licznik</h1>
        <p>{licznik.toFixed(1)}</p>
        <button onClick={toggleCounting} disabled={licznik <= 0}>
          {licznik <= 0 ? "Odliczanie zakończone" : isActive ? "Stop" : "Start"}
        </button>
      </div>
    </>
  );
}

export default Odliczanie;
