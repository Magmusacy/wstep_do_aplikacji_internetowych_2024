import { useState } from 'react';

function Haslo() {

  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  function displayPasswordMessage() {
    if (password === '' && passwordRepeat === '') {
      return <p>Wpisz haslo</p>;
    } else if (password !== passwordRepeat) {
      return <p>Hasla sie nie zgadzaja</p>;
    } else {
      return;
    }
  }

  return (
    <form>
      <input type="text" placeholder="Wpisz hasło..." onChange={(e) => setPassword(e.target.value)}/>
      <input type="text" placeholder="Powtórz hasło..." onChange={(e) => setPasswordRepeat(e.target.value)}/>
      <div>
        {displayPasswordMessage()}
      </div>
    </form>
  );
}

export default Haslo;