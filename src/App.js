import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import BookingPage from "./BookingPage";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <>
        <div className="header">
          <Header />
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reservations" element={<BookingPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
