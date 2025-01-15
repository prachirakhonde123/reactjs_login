// import logo from './logo.svg';
// import {Routes,Route} from "react-router-dom"
import {BrowserRouter as Router,Route,Routes, BrowserRouter, Navigate} from 'react-router-dom'
import './App.css';
import RegisterForm from './Pages/Register';
import Login from "./Pages/Login";
import HomePage from "./Pages/Home";
import ProtectedRoute from "./Components/Protectedroute";
import Marketing from './Pages/Marketing';
import PageNotFound from './Pages/Pagenotfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import WithNav from './Components/Navbar/WithNav';
import WithoutNav from './Components/Navbar/WithoutNav';
import ThankYouPage from './Pages/Thank-You';
import ContactUsForm from './Pages/Contact-Us';

function App() {
  return (
    <>
    {/* <Router>
       <Routes>
           <Route path="/register" element={<RegisterForm />}/>
           <Route path="/sign-in" element={<Login />}/>
           <div> 
            <Navbar/>          
            <Route
              path="/"
              element={
                  <ProtectedRoute>
                      <HomePage />
                  </ProtectedRoute>
              }
            />
           <Route path="/about-us" element={<AboutUs />}/>
           <Route path="/marketing" element={<Marketing />}/>
           <Route path="/contact-us" element={<ContactUs />}/>
           </div>
       </Routes>
    </Router> */}
     <BrowserRouter>
    <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/sign-in" element={<Login/>} />
          <Route path="/register" element={<RegisterForm/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Route>
        <Route element={<><ProtectedRoute/><WithNav/></>}>
            <Route path="/" element={<HomePage/>}></Route>
        </Route>
        <Route element={<WithNav/>}>
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/marketing" element={<Marketing/>} />
            <Route path="/contact-us" element={<ContactUsForm/>} />
            <Route path="/thank-you" element={<ThankYouPage/>} />
        </Route>
    </Routes>  
    </BrowserRouter>
    </>
  );
}





export default App;
