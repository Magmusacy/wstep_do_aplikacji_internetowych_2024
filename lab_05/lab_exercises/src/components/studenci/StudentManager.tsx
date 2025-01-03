import { useState } from "react";
import Dodawanie from "./Dodawanie";

export interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

function StudentManager() {
  const [students, setStudents] = useState<Student[]>([
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
  ]);

  function addStudent(student: Student) {
    setStudents((prevStudents) => [...prevStudents, student]);
  }

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

      <Dodawanie onAddStudent={addStudent} />
    </>
  );
}

export default StudentManager;
