import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Instructions from "./Components/Instructions";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Examples from "./Components/Examples";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Login from "./Components/Login";
import SignIn from "./Components/SignUp";
import ComingSoon from "./Components/ComingSoon";
import { useEffect, useState } from "react";
import Dashboard from "./Components/DashBoard/Dashboard";



function App() {

  // const [accessTime, setAccessTime] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAccessTime((prevTime)=>{
  //       return (prevTime +1);
  //     });
  //     console.log(accessTime)
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/landingpage"
          element={
            <div className="flex flex-col">
              <NavBar />
              <Home />
              <About className="border-solid border-black border-2" />
              <Instructions />
              <Examples />
              <Footer />
            </div>
          }
        />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
