import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import List from "./components/List";
import ShapeDetails from "./components/ShapeDetails";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/shape/1" element={<ShapeDetails shape={1} />} />
        <Route path="/shape/2" element={<ShapeDetails shape={2} />} />
        <Route path="/shape/3" element={<ShapeDetails shape={3} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
