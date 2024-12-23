import { useState } from "react";

function Logowanie() {
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [username, setUsername] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (passwordRepeat !== password && username !== "") {
      alert("Hasła nie są zgodne!");
    } else if (password === passwordRepeat && username !== "") {
      alert("Zalogowano!");
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          type="text"
          placeholder="Wpisz nazwę użytkownika..."
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Wpisz hasło..."
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Powtórz hasło..."
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />
      </div>
      <div>
        <input
          type="submit"
          value="Zaloguj"
          disabled={username === "" || password === "" || passwordRepeat === ""}
        />
      </div>
    </form>
  );
}

export default Logowanie;
