import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="logoname footer-col">
          <h1>The Rumblies </h1>
        </div>
        <p className="copyright">&copy; Copyright 2022</p>
        <div className="footer-col footer-socials-list">
            <a href='https://github.com/MaeBK'><img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png" alt='Github Link' width='50px'/></a>
        
            <a href='https://www.linkedin.com/in/maeghanbk/'><img src="https://icon-library.com/images/white-linkedin-icon-png/white-linkedin-icon-png-26.jpg" alt='Linknedin Link' width='50px'/></a>
          </div>
      </div>
    </footer>
  );
}
