import React from "react";
import '../styles/footer.css';

import Linkedin from '../Assets/Social_media/linkedin-480.png'
import Github from '../Assets/Social_media/github-480.png'
import Instagram from '../Assets/Social_media/instagram-384.png'

export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className="footer">
            <div className="copyright">
                <h3>Designed and Developed by Abhishek Kumar</h3>
            </div>
            <div className="copyright">
                <h3>Copyright © {year} AK</h3>
            </div>

            <div className="footer-icons">
                <div className="footer-social-links">
                    <a className='footer-social-icon' href="https://github.com/Abhishekkumar021?tab=repositories" target="_blank" rel="noreferrer">
                        <img src={Github} alt="GitHub" />
                    </a>

                    <a className='footer-social-icon' href="https://www.linkedin.com/in/abhishek-kumar021" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="Linkedin" />
                    </a>

                    <a className='footer-social-icon' href="https://www.instagram.com/abhishekkumar021_" target="_blank" rel="noreferrer">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>
            </div>
        </div>
    );
}
