
import "./CLandPage.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useEffect } from "react";

  // Empty dependency array ensures AOS.init() runs only once after component mounting

function CLand() {
  useEffect(() => {
    AOS.init({
      offset: 250,
      delay: 120
    });
  }, []); 
  return (
    <div className="colorpage">
    <div className="LandPage">
      <div className="info" >
        {/* <p>Got A Query?</p> */}
        <h1>
          Contact Us !!
        </h1>
        

      </div>
      </div>
    </div>
  );
}
export default CLand;