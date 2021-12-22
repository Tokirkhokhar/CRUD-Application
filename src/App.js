import './App.css';
import NavBar from './Componenets/NavBar';
import CodeforInterview from './Componenets/CodeforInterview';
import AllUsers from './Componenets/AllUsers';
import AddUser from './Componenets/AddUser';
// import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Notefound from './Componenets/Notefound';
import Edituser from './Componenets/Edituser';




function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/"  element={<CodeforInterview/>}/>
      <Route path="/all" element={<AllUsers/>}/>
      <Route path="/add" element={<AddUser/>}/>
      <Route path="/edit/:id" element={<Edituser/>}/>
      <Route path="*" element={<Notefound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
