// import logo from './logo.svg';
// import {Routes,Route} from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import RegisterForm from './Pages/Register';
import Login from "./Pages/Login";
import HomePage from "./Pages/Home";
import ProtectedRoute from "./Components/Protectedroute";


function App() {
  return (
    // <div className="App">
    //     {/* <RegisterForm/> */}
    //     <Login/>
    // </div>
    <Router>
       <Routes>
           <Route path="/" element={<RegisterForm />}/>
           <Route path="/sign-in" element={<Login />}/>
           <Route
              path="/home"
              element={
                  <ProtectedRoute>
                      <HomePage />
                  </ProtectedRoute>
              }
            />
       </Routes>
    </Router>
  );
}

export default App;
