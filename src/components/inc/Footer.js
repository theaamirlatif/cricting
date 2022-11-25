import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <div className='footer-parent'>
                <div className='footer-inner'>
                    <div className='inner-child'>
                        <div className='footer-in-left'>
                            <div className='logo'>
                                <img src='assets/images/favicons/small.png' alt='logo' />
                            </div>
                            <div className='tag-line'>
                                <p>Lorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simply</p>
                            </div>
                        </div>
                        <div className='footer-in-right'>
                            <a href='/#'><FontAwesomeIcon className='right-fb' icon={faFacebookF} style={{ borderRadius: "50px", backgroundColor: 'white', color: '#3b5999', fontSize: '18px', padding: '5px 8px', margin: '0px 8px' }} /></a>
                            <a href='/#'><FontAwesomeIcon className='right-tw' icon={faTwitter} style={{ borderRadius: "50px", backgroundColor: 'white', color: '#00acee', fontSize: '18px', padding: '5px 5px', margin: '0px 8px' }} /></a>
                            <a href='/#'><FontAwesomeIcon className='right-yt' icon={faYoutube} style={{ borderRadius: "50px", backgroundColor: 'white', color: '#f50000', fontSize: '18px', padding: '5px 5px', margin: '0px 8px' }} /></a>
                            <a href='/#'><FontAwesomeIcon className='right-ig' icon={faInstagram} style={{ borderRadius: "50px", backgroundColor: 'white', color: '#dd277b', fontSize: '18px', padding: '5px 6px', margin: '0px 8px' }} /></a>
                        </div>
                    </div>
                </div>
                {/* split */}
                <div className='footer-bottom'>
                    <div className='inner-bottom'>
                        <div className='footer-bot-left'>
                            <p>Design by&nbsp;<a href='/#'><h5>TECHYROOF</h5></a>&nbsp;2022</p>
                        </div>
                        <div className='footer-bot-right'>
                            <div className="footer-bot-menu">
                                <ul className="footer-bot-menu-list">
                                    <li><a className="active" href="/header-links">HOME</a></li>
                                    <li><a href="/header-links">FEATURES</a></li>
                                    <li><a href="/header-links">NOMINATES</a></li>
                                    <li><a href="/header-links">MORE</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;
