import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Download from "./pages/Download";
import ContactUs from "./pages/ContactUs";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/download" element={<Download />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

//Remeber when uploading to git Start every path with this ==> path="/stocker-website/"
