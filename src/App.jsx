import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ListPage from "./pages/ListPage/ListPage";
import SinglePost from "./pages/SinglePost/SinglePost";

const activeLink = ({ isActive }) => (isActive ? "activeLink" : "");

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} className={activeLink}>
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className={activeLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/list"} className={activeLink}>
              List
            </NavLink>
            <NavLink to={"/single"} className={activeLink}>
              Single
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/single" element={<SinglePost />} />
      </Routes>
    </>
  );
}

export default App;
