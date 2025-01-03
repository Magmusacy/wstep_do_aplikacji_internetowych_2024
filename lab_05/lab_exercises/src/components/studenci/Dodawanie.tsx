import { useRef, FormEvent } from "react";
import { Student } from "./StudentManager";

interface DodawanieProps {
  onAddStudent: (student: Student) => void;
}

function Dodawanie(props: DodawanieProps) {
  const formRef = useRef<HTMLFormElement>(null);

  function formSubmit(e: FormEvent) {
    e.preventDefault();
    const form = formRef.current;
    if (form && form.imie.value && form.nazwisko.value && form.rocznik.value) {
      const imie = form.imie.value;
      const nazwisko = form.nazwisko.value;
      const rocznik = parseInt(form.rocznik.value);
      props.onAddStudent({ imie, nazwisko, rocznik });
      form.imie.value = "";
      form.nazwisko.value = "";
      form.rocznik.value = "";
    }
  }

  return (
    <form ref={formRef} onSubmit={(e) => formSubmit(e)}>
      <input type="text" name="imie" id="imie" placeholder="Imie..." />
      <input
        type="text"
        name="nazwisko"
        id="nazwisko"
        placeholder="Nazwisko..."
      />
      <input
        min="0"
        max={new Date().getFullYear()}
        type="number"
        name="rocznik"
        id="rocznik"
        placeholder="Rocznik..."
      />

      <button type="submit">Dodaj studenta</button>
    </form>
  );
}

export default Dodawanie;
