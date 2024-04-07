import React from "react";
import "./Download.css";


function Download() {
   return (
    <>
    <div className="joinus"><h3>Join Us on the Mobile</h3>
    <div className="sheild">
      <p>Ready to take control of your safety? Download ShieldHer
         and discover how technology can empower you to live freely
          and fearlessly. Available on both iOS and Android platforms, 
          ShieldHer is just a tap away from becoming your trusted safety companion.</p>
          <a href="https://drive.google.com/file/d/1tEdz0d6l70O9uDjRZzpHKsav-PiPmlan/view" target="_blank" rel="noopener noreferrer" className="download-button">
            Download Now
          </a>
    </div>  
    </div>
    <div className="meet">
    <h3>Meet Our Team</h3>
    <div className="flipcard">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"></div>
          <div class="flip-card-back">
            <h1>Namrata Diware</h1> 
            <p>Computer Science Engineer</p> 
            <p>I'm a 2nd year Btech student pursuing Engineering in Shri RamdeoBaba College of Engineering and Management </p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front2"></div>
          <div class="flip-card-back">
            <h1>Prathamesh Rokade</h1> 
            <p>Computer Science Engineer</p> 
            <p>I'm a 2nd year Btech student pursuing Engineering in Shri RamdeoBaba College of Engineering and Management </p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front3"></div>
          <div class="flip-card-back">
            <h1>Pranay Rokade</h1> 
            <p>Computer Science Engineer</p> 
            <p>I'm a 2nd year Btech student pursuing Engineering in Shri RamdeoBaba College of Engineering and Management </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};


export default Download;

