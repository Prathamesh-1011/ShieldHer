import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Download from "./Components/AboutUs/Download";
import Home from './Components/Home/Home';
import ContactPage from './Components/ContactPage/ContactPage';
import { useEffect } from 'react'; // Import useEffect

function App() {
  useEffect(() => {
    document.title = 'SheildHer'; // Set document title

    // Dynamically load the ChatBot script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://cdn.chatbot.com/widget/plugin.js';
    document.body.appendChild(script);

    // Set up the ChatBot configuration
    window.__be = window.__be || {};
    window.__be.id = "6611a35fb644580007248051";

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return(
    <>
      <Auth0Provider
        domain="dev-n6wdwty28zmy4gom.us.auth0.com"
        clientId="22x7UCFHLBCChWXiiAXzEbWyqq5KH22a"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/download" element={<Download/>} />
          </Routes>
          <Footer/>
        </Router>
      </Auth0Provider>,
    </>
  );
}

export default App;
