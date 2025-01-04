import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/blogs">Blogi</Link>
          </li>
          <li>
            <Link to="/add">Stwórz nowego bloga</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
