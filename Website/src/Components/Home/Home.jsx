
import "./Home.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Draggable from "react-draggable";
import React, { useState, useEffect } from "react";
function Home() {
  useEffect(() => {
    AOS.init({
      offset: 250,
      delay: 180
    });
  }, []);
   // Empty dependency array ensures AOS.init() runs only once after component mounting
   const [currentIndex, setCurrentIndex] = useState(0);

   const nextSlide = () => {
     setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
   };
 
   const prevSlide = () => {
     setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
   };
  return (
    <>
      <div className="mainpage">
   
        <div className="landimg"></div>
        <div className="head" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
 
          <h3 >ShieldHer</h3>
          <p>Safety Simplified, Your Trusted Companion</p>
          <p id="para">
"Empower yourself with our women safety app, ensuring peace of mind wherever you go. Instant alerts, location sharing, and community support - all at your fingertips for a safer journey ahead."</p>
        </div>
      </div>
      <div className="works">
        <h3>About Us</h3> 
        <p>Welcome to ShieldHer - Safety Simplified, Your Trusted Companion. 
          At ShieldHer, we are dedicated to providing women with the tools 
          and resources they need to feel safe and empowered in every aspect 
          of their lives. Our mission is to create a world where women can move
           freely without fear, where their voices are heard and respected. 
          With our innovative app, we offer a comprehensive suite of safety
           features designed to give women peace of mind wherever they go.Join us in
            our commitment to building a safer, more inclusive world for women 
            everywhere. Together, we can make a difference.</p>
        <br/>  <br/>
        {/* <div className="table">
          <table border="1">
            <tr className="tab">
              <th id="image"></th>
              <th id="column">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequuntur deserunt libero sunt excepturi, doloremque adipisci iste non similique explicabo nihil temporibus vitae totam deleniti assumenda animi voluptas incidunt maiores rem eius beatae. Pariatur cum quis corrupti voluptatibus! Ex molestiae veniam dolorem placeat aut, tempore maiores hic consectetur dicta eum modi exercitationem? Culpa optio necessitatibus, animi sed odio quas molestiae perferendis odit inventore. Minima optio omnis sit ullam voluptatem aliquid, accusamus non vero, magni deserunt rem, corrupti esse quos quo porro repudiandae cupiditate harum tenetur quam fuga numquam labore voluptate. Laborum distinctio, aspernatur accusantium commodi ipsa fugit! Est, nesciunt fugit.</th>
            </tr>
          </table>
        </div> */}
      </div>

      <div className="feature"><p id="feat">Features</p>
    <div className="slider-container">
      <button className="arrow prev" onClick={prevSlide}>&#10094;</button>
      <div className="card-slider">
        <Draggable axis="x">
          <div
            className={`card ${currentIndex === 0 ? "active" : ""}`}
          >
           <h1>Emergency Helplines</h1>
         
           <p>All helplines in a single App</p>
          </div>
        </Draggable>
        <Draggable axis="x">
          <div 
            className={`card ${currentIndex === 1 ? "active" : ""}`}
          >
            <h1>Nearby Facilities</h1>
            <p>Hospitals,Police Stations,Pharmacy,etc.</p>
          </div>
        </Draggable>
        <Draggable axis="x">
          <div
            className={`card ${currentIndex === 2 ? "active" : ""}`}
          >
           <h1>Offline Facilities</h1>
           <p>One can access helplines offline</p>
          </div>
        </Draggable>
      </div>
      <button className="arrow next" onClick={nextSlide}>&#10095;</button>
      
    </div>
    {/* <div className="secure">
    <button className="button4"></button>
    <button className="button5"></button>
    <button className="button6"></button>
    {/* <button className="button7"></button> 
  </div> */}
</div>


      
      
    </>
  );
}

export default Home;
