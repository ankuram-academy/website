import React from 'react'

function SocialMedia() {
    return (
        <div className="social">
            <ul>
                <li>
                    <a href="https://www.youtube.com/channel/UCWfwFdGTHiUTZNMgdeCwyAA" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/AnkuramAcad" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/school/ankuram-academy" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto:info@ankuramacademy.in?Subject=Course%20Inquiry" rel="noopener noreferrer">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia
