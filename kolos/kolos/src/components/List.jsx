import { useEffect, useState } from "react";
import Circle from "./Circle";
import Square from "./square";
import Rectangle from "./Rectangle";
import { useNavigate } from "react-router-dom";

export default function List() {
  const [circles, useCircles] = useState([1]);
  const [squares, useSquares] = useState([1]);
  const [rectangles, useRectangles] = useState([1]);
  const [filtr, useFiltr] = useState(0);
  const navigate = useNavigate();

  function removeRectangle(index) {
    useRectangles(rectangles.filter((el, idx) => idx !== index))
  }

  function removeCircle(index) {
    useCircles(circles.filter((el, idx) => idx !== index))
  }

  function removeSquares(index) {
    useSquares(squares.filter((el, idx) => idx !== index))
  }

  useEffect(() => {
    console.log(filtr)
  })
  
  return (
    <div className="lista">
      <select onChange={e => {
        useFiltr(parseInt(e.target.value))
      }}>
        <option value="0">Wszystkie</option>
        <option value="1">Kwadraty</option>
        <option value="2">Prostokąty</option>
        <option value="3">Kółka</option>
      </select>

      <h2>Kształty</h2>
      <ul className="ksztalty">
        {(filtr == 0 || filtr == 3) && circles.map((circle, index) => (
          <li  key={index}>
            <div onClick={() => {navigate('/shape/1')}}>
              <Circle />
            </div>
            <button onClick={() => removeCircle(index)}>Usuń</button>
          </li>
        ))}
        {(filtr == 0 || filtr == 1) && squares.map((square, index) => (
          <li  key={index}>
            <div onClick={() => {navigate('/shape/2')}}>
              <Square />
            </div>
            <button onClick={() => removeSquares(index)}>Usuń</button>
          </li>
        ))}
        {(filtr == 0 || filtr == 2) && rectangles.map((rectangle, index) => (
          <li key={index}>
            <div onClick={() => {navigate('/shape/3')}}>
              <Rectangle />
            </div>
            <button onClick={() => removeRectangle(index)}>Usuń</button>
          </li>
        ))}
      </ul>

      <button onClick={() => {useCircles([...circles, 1])}}>Dodaj kółko</button>
      <button onClick={() => {useSquares([...squares, 1])}}>Dodaj kwadrat</button>
      <button onClick={() => {useRectangles([...rectangles, 1])}}>Dodaj prostokąt</button>
    </div>
  );
}