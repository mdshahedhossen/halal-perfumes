import React from 'react';
import './Footer.css'

const Footer = () => {
    let year=new Date().getFullYear()
    return (
        <div>
            <footer className='footer-container'sticky="bottom">
                <div className='projet-title'>
                    <h4>Halal Perpumes</h4>
                    <p>This Project is wareHouse base project</p>
                </div>
                <div className='dev-info'>
                    <p><small>shaheddiu23@gmial.com</small></p>
                    <p><small>Copyright &copy;{year} Md Shahed Hossen</small></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;