import { useState, useEffect } from "react";

function Tytuł() {
  const [tytuł, setTytuł] = useState("");

  useEffect(() => {
    document.title = tytuł;
  }, [tytuł]);

  return (
    <>
      <input
        type="text"
        placeholder="Tytuł strony..."
        onChange={(e) => setTytuł(e.target.value)}
        value={tytuł}
      />
    </>
  );
}

export default Tytuł;
