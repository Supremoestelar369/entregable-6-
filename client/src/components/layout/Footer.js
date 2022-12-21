import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="footer-content container ">
        <div className="footer-copyright">
          <p>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
        <div className="social">
          <a
            href="https://github.com/Supremoestelar369/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="supremo estelar-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/omar-a-s-36b4a271"
            target="_blank"
            rel="noreferrer"
          >
            <i className="-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
