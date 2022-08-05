import React from "react";
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Download from "./pages/Download";
import ContactUs from "./pages/ContactUs";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  MainRoute,
  FaqRoute,
  ContactUsRoute,
  DownloadRoute,
  TermsOfServiceRoute,
  PrivacyPolicyRoute,
} from "./routes/routes";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={MainRoute} element={<Home />} />
          <Route path={FaqRoute} element={<FAQ />} />
          <Route path={ContactUsRoute} element={<ContactUs />} />
          <Route path={DownloadRoute} element={<Download />} />
          <Route path={TermsOfServiceRoute} element={<TermsOfService />} />
          <Route path={PrivacyPolicyRoute} element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
