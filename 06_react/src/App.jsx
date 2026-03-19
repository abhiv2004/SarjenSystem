import { Routes, Route, Link } from "react-router-dom";
import {Home,About} from "./Home.jsx";
import LifeCycle from "./LifeCycle.jsx";
import StateDemo from "./StateDemo.jsx";
import Counter from "./Counter.jsx";
import StateDemo2 from "./StateDemo2.jsx";
import Addition from "./Addition.jsx";
import SumUsingObject from "./SumUsingObject.jsx";
import EventDemo from "./EventDemo.jsx";
import SignupForm from "./SignupForm.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import ChangePassword from "./Changepassword.jsx";
import EditProfile from "./EditProfile.jsx";
import MapDemo from "./MapDemo.jsx";
import Todo from "./todo.jsx";

function App() {

  const navStyle = {
    backgroundColor: "#282c34",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 10px",
    fontWeight: "500",
    borderRight : "1px solid white ",
    paddingRight : "10px",
    paddingLeft : "0px"
  };

  return (
    <>
      <nav style={navStyle}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/about">About</Link>
    
        <Link style={linkStyle} to="/signup">Signup</Link>
        <Link style={linkStyle} to="/login">Login</Link>
         <Link style={linkStyle} to="/event">EventDemo</Link>
        <Link style={linkStyle} to="/lifecycle">LifeCycle</Link>
        <Link style={linkStyle} to="/state1">StateDemo 1</Link>
        <Link style={linkStyle} to="/state2">StateDemo 2</Link>
        <Link style={linkStyle} to="/counter">Counter</Link>
        <Link style={linkStyle} to="/addition">Sum with validation</Link>
        <Link style={linkStyle} to="/sum">Sum using Object</Link>
        <Link style={linkStyle} to="/map">MapDemo</Link>
        <Link style={linkStyle} to="/todo">To-Do</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

         <Route path="/signup" element={<SignupForm />} />
         <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/event" element={<EventDemo />} />
        <Route path="/lifecycle" element={<LifeCycle />} />
        <Route path="/state1" element={<StateDemo />} />
        <Route path="/state2" element={<StateDemo2 />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/addition" element={<Addition />} />
        <Route path="/sum" element={<SumUsingObject />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/map" element={<MapDemo />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;