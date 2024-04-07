import React from "react";
import "./Footer.css";

function Footer() {
  // URLS of the Social Media Accounts
  const instagramUrl = "https://www.instagram.com/blockchain_rcoem_chapter/";
  const youtubeUrl = "https://www.youtube.com/@BlockchainRCOEM";
  const githubUrl = "https://github.com/Blockchain-RCOEM-Chapter";
  const linkedinUrl =
    "https://www.linkedin.com/company/blockchain-rcoem-chapter/mycompany/";
  const twitterUrl = "https://twitter.com/blockchainrcoem";
  const discordUrl = "https://discord.com/invite/UJKENvAGBr";
  const email = "namrata.diware@gmail.com";

  return (
    <footer>
      {/* Container Containing All social media links */}
      <div className="social-media">
        <p>Join Us</p>
        <div className="social-media-links">
          <a
            className="linkOfSocialMedia"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className="linkOfSocialMedia"
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            className="linkOfSocialMedia"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="linkOfSocialMedia"
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="linkOfSocialMedia"
            href={twitterUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            className="linkOfSocialMedia"
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-discord"></i>
          </a>
        </div>
      </div>

      {/* Container for Devloped By names in Phone Screen Size */}
      <div className="phonesized-devlopedby-S">
        <p>Designed and Devloped By </p>
        <span>BYTE BANDITZ</span>
      </div>

      {/* Container Containing Disclosers  */}
      <div className="rights">
        <div>
          <span id="footer-contactus">Contact Us</span>
          <span>{email}</span>
        </div>
        <div className="right-reserved">
          <span>
            &copy; All rights reserved by{" "}
            <span id="footer-brc">Byte Banditz</span>
          </span>
        </div>
      </div>
      {/* Container Containing ShoutOut to developers */}

      {/* Container for Devloped By names in Phone Screen Size */}
      <div className="phonesized-devlopedby-L">
        <p>Designed and Developed By </p>
        <span>Byte Banditz</span>
      </div>
    </footer>
  );
}

export default Footer;
