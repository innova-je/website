import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Events from './Pages/Events'
import Home from "./Pages/Home";
import JoinUs from "./Pages/Join-Us";
import OurAdvisors from "./Pages/Our-Advisors";
import OurTeam from "./Pages/Our-Team";
import OutOffice from "./Pages/Out-of-Office";
import Services from "./Pages/Services";
import AboutUs from './Pages/About-Us'
import { Box } from "@mui/material";
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import React, { useState } from 'react'

function App() {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);
  const maintenance_pages = ["/events", "/out-of-office", "/services"]

  // Set the showFooter state based on the current path
  React.useEffect(() => {
    if (maintenance_pages.includes(location.pathname)) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);

  return (
    <Box bgcolor="#F0F0F0" overflow="hidden">
      <Navbar />

      <Routes>
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/events' element={<Events/>} />
        <Route path='/' element={<Home />} />
        <Route path='/join-us' element={<JoinUs />} />
        <Route path='/our-people/our-advisors' element={<OurAdvisors />} />
        <Route path='/our-people/our-team' element={<OurTeam />} />
        <Route path='/out-of-office' element={<OutOffice/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='*' element={<NoMatch />} />

      </Routes>

      {showFooter && (<Footer/>)}

    </Box>
  );
}

function NoMatch() {
  return (
    <Box>
      <h1>Page not found.</h1>
    </Box>
  );
}
export default App;
