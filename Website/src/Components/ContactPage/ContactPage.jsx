import React from "react";
import "./ContactPage.css";
import CLandPage from "./CLandPage/CLandPage";
import Formpage from "./FormPage/FormPage";



function ContactPage() {
  
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return (
      <>
          {/* <div className="chatbot-button">Chat</div> */}
          <title>CONTACT US | BLOCKCHAIN RCOEM CHAPTER</title>
          <meta
            name="description"
            content="Connect with Blockchain RCOEM. Have questions or ideas? Reach out—we're here to help. Let's collaborate and shape the future together!"
          />
          <meta
            property="og:title"
            content="CONATACT US | BLOCKCHAIN RCOEM CHAPTER"
          />
          <meta
            property="og:site_name"
            content="CONATACT US | BLOCKCHAIN RCOEM CHAPTER"
          />
          <meta
            property="og:description"
            content="Connect with Blockchain RCOEM. Have questions or ideas? Reach out—we're here to help. Let's collaborate and shape the future together!"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://blockchainrcoemchapter.co.in/contact"
          />
          <link
            rel="cononical"
            href="https://blockchainrcoemchapter.co.in/contact"
          />
     
        <div className="Contact">
          <CLandPage />
  
          <div>
            <h1 className="heading">
             
            </h1>
          </div>
  
          <div className="image">
            <Formpage />
          </div>
        </div>
      </>
    );
  }
  
  export default ContactPage;
  