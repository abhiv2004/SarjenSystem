import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { Home, About, Contact } from "./Home.jsx";
import Task2 from "./Task2.jsx";
import Task3 from "./Task3.jsx";
import Task4 from "./Task4.jsx";
import Task5 from "./Task5.jsx";
import Task6 from "./Task6.jsx";
import Task7 from "./Task7.jsx";
import Task8 from "./Task8.jsx";
import Task9 from "./Task9.jsx";
import Task10 from "./Task10.jsx";
import Task11 from "./Task11.jsx";
import Task12_L from "./Task12_L.jsx";
import Task12_S from "./Task12_S.jsx";
import Task13_L from "./Task13_L.jsx";
import Task13_S from "./Task13_S.jsx";
import Task14 from "./Task14.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Task19 from "./Task19.jsx";
import { Layout } from "./Layout.jsx";

function App() {

  const [openTask1, setOpenTask1] = useState(false);
  const [openTask12, setOpenTask12] = useState(false);
  const [openTask13, setOpenTask13] = useState(false);

  const sidebarStyle = {
    width: "220px",
    height: "100vh",
    backgroundColor: "#282c34",
    padding: "20px",
    position: "fixed",
    color: "white",
    overflowY: "auto"
  };

  const linkStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "5px",
    margin: "5px 0"
  };

  const activeStyle = {
    backgroundColor: "#61dafb",
    color: "black"
  };

  const dropdownStyle = {
    paddingLeft: "15px"
  };

  const contentStyle = {
    marginLeft: "240px",
    padding: "20px"
  };

  return (
    <>
      <div style={sidebarStyle}>
        <h3>Menu</h3>

        <div onClick={() => setOpenTask1(!openTask1)} style={linkStyle}>
          Task 1 {openTask1 ? "▲" : "▼"}
        </div>

        {openTask1 && (
          <div style={dropdownStyle}>
            <NavLink to="/" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Home</NavLink>
            <NavLink to="/about" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>About</NavLink>
            <NavLink to="/contact" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Contact</NavLink>
          </div>
        )}

        <NavLink to="/task2" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Task 2</NavLink>
        <NavLink to="/task3" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Task 3</NavLink>
        <NavLink to="/task4" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Task 4</NavLink>
        <NavLink to="/task5" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Task 5</NavLink>
        <NavLink to="/task6" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Task 6</NavLink>
        <NavLink to="/task7" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Task 7</NavLink>
        <NavLink to="/task8" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Task 8</NavLink>
        <NavLink to="/task9" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Task 9</NavLink>
        <NavLink to="/task10" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Task 10</NavLink>
        <NavLink to="/task11" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Task 11</NavLink>

        <div onClick={() => setOpenTask12(!openTask12)} style={linkStyle}>
          Task 12 {openTask12 ? "▲" : "▼"}
        </div>

        {openTask12 && (
          <div style={dropdownStyle}>
            <NavLink to="/t12_state" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>TODO State</NavLink>
            <NavLink to="/t12_local" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>TODO Local</NavLink>
          </div>
        )}

        <div onClick={() => setOpenTask13(!openTask13)} style={linkStyle}>
          Task 13 {openTask13 ? "▲" : "▼"}
        </div>

        {openTask13 && (
          <div style={dropdownStyle}>
            <NavLink to="/t13_state" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>State</NavLink>
            <NavLink to="/t13_local" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Local</NavLink>
          </div>
        )}

        <NavLink to="/task14" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Task 14</NavLink>
        <NavLink to="/task19" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Task 19</NavLink>

      </div>
        <ThemeProvider>
           <Layout>
            <div style={contentStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/task2" element={<Task2 />} />
              <Route path="/task3" element={<Task3 />} />
              <Route path="/task4" element={<Task4 />} />
              <Route path="/task5" element={<Task5 />} />
              <Route path="/task6" element={<Task6 />} />
              <Route path="/task7" element={<Task7 />} />
              <Route path="/task8" element={<Task8 />} />
              <Route path="/task9" element={<Task9 />} />
              <Route path="/task10" element={<Task10 />} />
              <Route path="/task11" element={<Task11 />} />

              <Route path="/t12_state" element={<Task12_S />} />
              <Route path="/t12_local" element={<Task12_L />} />

              <Route path="/t13_state" element={<Task13_S />} />
              <Route path="/t13_local" element={<Task13_L />} />
              <Route path="/task14" element={<Task14 />} />
              <Route path="/task19" element={<Task19 />} />
            </Routes>
          </div>
           </Layout>
        </ThemeProvider>
     
    </>
  );
}

export default App;