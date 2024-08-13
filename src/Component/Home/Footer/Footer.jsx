import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer id="footer">
      <div id="footer-content">
        <h1>Top companies choose <span>Jackson</span> Business to build in-demand career skills.</h1>
        <div id="footer-links">
          <div id="footer-section">
            <ul>
              <li><a href="#">Jackson Business</a></li>
              <li><a href="#">Teach on Jackson</a></li>
              <li><a href="#">Get the app</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div id="footer-section">
            <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Help and Support</a></li>
              <li><a href="#">Affiliate</a></li>
              <li><a href="#">Investors</a></li>
            </ul>
          </div>
          <div id="footer-section">
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Cookies Settings</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Accessibility statement</a></li>
            </ul>
          </div>
        </div>
        <div id="footer-bottom">
          <div id="footer-social">
            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"><Facebook /></a>
            <a href="https://x.com/?lang=en-in&mx=2"><Twitter /></a>
            <a href="https://www.instagram.com/?hl=en"><Instagram /></a>
            <a href="https://in.linkedin.com/"><LinkedIn /></a>
          </div>
          <p>&copy; 2024 Jackson Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
