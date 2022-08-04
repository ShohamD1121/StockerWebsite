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
import { MainRoute } from "./constants/constants";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={`/${MainRoute}`} element={<Home />} />
          <Route path={`/${MainRoute}/Faq`} element={<FAQ />} />
          <Route path={`/${MainRoute}/Contact-Us`} element={<ContactUs />} />
          <Route path={`/${MainRoute}/Download`} element={<Download />} />
          <Route
            path={`/${MainRoute}/Terms-Of-Service`}
            element={<TermsOfService />}
          />
          <Route
            path={`/${MainRoute}/Privacy-Policy`}
            element={<PrivacyPolicy />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

//Remeber when uploading to git Start every path with this ==> path="/stocker-website/"
