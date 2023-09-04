import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src="https://effizient.ca/assets/img/logo.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="footer-text">
                </div>
                
              
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                              
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2023, All Right Reserved{' '}
                  <a href="https://effizient.ca/">Effizient</a>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
