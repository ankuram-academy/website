import React from 'react'
import SocialMedia from './SocialMedia'

function Footer() {
    return (
        <footer className="footer-area">
            <div className="container">
	        <div className="row">
                {/* footer block-1 */}
                <div className="col-sm-3 footer-block logo">
                    <a href="/"><img src="img/ankuram_logo.png" alt="Ankuram Academy" /></a>
                </div>

                {/* footer block-2 */}
                <div className="col-sm-3 footer-block">
                    <h5>Address</h5>
                    <hr className="heading-line" />
                    <p>
                    1st Floor Seth Medical Store <br />
                    Beside Shree Vaidehi Vivah Ghar <br />
                    Ram Nagar Road, Chirgaon, 284301
                    </p>
                </div>

                {/* footer block-3 */}
                <div className="col-sm-4 footer-block">
                    <h5>Contact</h5>
                    <hr className="heading-line" />
                    <p>
                        <i className="far fa-envelope"></i> : <a href="mailto:info@ankuramacademy.in">info@ankuramacademy.in</a><br/>
                        <i className="fas fa-phone"></i> : +91-8382056360<br/>
                        <i className="fas fa-phone"></i> : +91-8299476197<br/>
                    </p>
                </div>

		        {/* footer block-4 */}
                <div className="col-sm-2 footer-block">
                    {/* <h5>Links</h5>
                    <hr className="heading-line">
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul> */}
                </div>
	        </div>

            <div className="row">
                <div className="col-sm-12">
                    <hr />
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4 col-sm-offset-1 copyright">
                    <p> Copyright © 2020 All Right Reserved </p>
                </div>
                {/* <div className="col-sm-4">
                    <ul className="privacy-link">
                        <li><a href="/privacyPolicy">Privacy Policy </a></li>
                        <li><a href="/t&c">Term and Conditions </a></li>
                    </ul>
                </div> */}
                <div className="col-sm-3 col-sm-offset-4">
                    <SocialMedia />  
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer
