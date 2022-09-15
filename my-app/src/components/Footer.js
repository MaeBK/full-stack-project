import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="logoname footer-col">
          <h1>Consume </h1>
        </div>
        <p className="copyright">&copy; Copyright 2022</p>
        <div className="footer-col footer-socials-list">
            <a href='https://github.com/MaeBK'><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='Github Link' width='50px'/></a>
        
            <a href='https://www.linkedin.com/in/maeghanbk/'><img src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png" alt='Linknedin Link' width='50px'/></a>
          </div>
      </div>
    </footer>
  );
}
