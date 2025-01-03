interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

function Studenci() {
  const students: Student[] = [
    {
      imie: "Harry",
      nazwisko: "Potter",
      rocznik: 1997,
    },
    {
      imie: "Hermione",
      nazwisko: "Granger",
      rocznik: 1997,
    },
    {
      imie: "Ron",
      nazwisko: "Weasley",
      rocznik: 1997,
    },
    {
      imie: "Draco",
      nazwisko: "Malfoy",
      rocznik: 1997,
    },
  ];

  return (
    <>
      <h1>Studenci</h1>
      <ul>
        {students.map((student, index) => {
          return (
            <li key={index}>
              <p>Imie: {student.imie}</p>
              <p>Nazwisko: {student.nazwisko}</p>
              <p>
                Rocznik:
                {student.rocznik}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Studenci;
