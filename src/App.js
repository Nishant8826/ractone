import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx"
import Contact from "./components/Contact.jsx";
import Service from "./components/Service.jsx";

import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/mediaQuery.scss"

import "./styles/App.scss"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Service/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
